import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Turno } from "../schemas/turno.schema";
import { CreateTurnoDto } from "./dto/create-turno.dto";
import { FilterTurnoDto } from "./dto/filter-turno.dto"

const HORARIO_BASE = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
    "13:30", "14:00", "14:30", "15:00", "15:30"
]

const PRESTADORES: Record <string, { telefonos: string[], tipoPrestador: string }> = {
    "Dr. Zene": { telefonos: ["4695-1251", "4587-1247"], tipoPrestador: "Sanatorio"},
    "Dr. Pepe": { telefonos: ["4444-4178", "4858-2659"], tipoPrestador: "Consultorio Privado"},
    "Dra. Lena": { telefonos: ["4851-9688"], tipoPrestador: "Centro Médico"},
}

interface PrestadorData {
    profesional: string;
    direccion: string;
    telefonos: string[];
    tipoPrestador: string;
    especialidad: string;
}

const PREFIJO_TURNO = 30;

@Injectable()
export class TurnosService {
    constructor(@InjectModel(Turno.name) private turnoModel: Model <Turno>,){}

    private async getDataPrestadores(filtros: FilterTurnoDto): Promise <PrestadorData[]>{
        const filtroDb: any = {
            ...(filtros.especialidad && { especialidad: filtros.especialidad }),
            ...(filtros.medico && { medico: filtros.medico }),
        }

        const medicosUnicos= await this.turnoModel.distinct('medico', filtroDb).exec()
        if(medicosUnicos.length === 0){
            return []
        }

        const docsPrestadores = await this.turnoModel
            .find({ medico: { $in: medicosUnicos}, ...(filtros.especialidad && { especialidad: filtros.especialidad }),})
            .select('medico lugarDeAtencion especialidad')
            .limit(medicosUnicos.length)
            .lean()
            .exec()

        const mapUnico = new Map<string, PrestadorData>()

        for(const data of docsPrestadores){
            const profesionalId = data.medico;

            if(profesionalId && !mapUnico.has(profesionalId)){
                const dataPrestadores = PRESTADORES[profesionalId]?.tipoPrestador || 'N/D'
                const dataTelefonos = Array.isArray(PRESTADORES[profesionalId]?.telefonos ) ? PRESTADORES[profesionalId].telefonos : []
                const dataTelefonosPrestadores = { telefonos: dataTelefonos, tipoPrestador: dataPrestadores}

                mapUnico.set(profesionalId, {
                    profesional: profesionalId,
                    direccion: data.lugarDeAtencion || '',
                    especialidad: filtros.especialidad || data.especialidad || '',
                    telefonos: dataTelefonosPrestadores.telefonos,
                    tipoPrestador: dataTelefonosPrestadores.tipoPrestador
                })
            }

        }

        return Array.from(mapUnico.values())

    }


    async create(dto: CreateTurnoDto) : Promise<Turno>{
        const afiliado = dto.numeroAfiliado
        let nuevoNumeroOrden: number;
        let turnoCreado: Turno;

        try {
            const ultimoTurno = await this.turnoModel
                .findOne({ numeroAfiliado: afiliado })
                .sort({ numeroOrden: -1 })
                .exec()

            if(ultimoTurno){
                nuevoNumeroOrden = ultimoTurno.numeroOrden +1
            }else{
                
                nuevoNumeroOrden = dto.numeroAfiliado * 1000000 + PREFIJO_TURNO * 10000 +1
            }

            turnoCreado = new this.turnoModel({ ...dto, numeroOrden: nuevoNumeroOrden })
            
            return turnoCreado.save()
        } catch (error) {
            console.error('Error al crear turno: ', error);
            throw new InternalServerErrorException('Error al crear el turno')
        }
    }

    async findAll(filtro: any): Promise <Turno[]>{
        return this.turnoModel.find(filtro).exec()
    }

    async delete(id: string): Promise <any>{
        const resultado = await this.turnoModel.findByIdAndDelete(id).exec()

        if(!resultado){
            throw new NotFoundException(`turno con id ${id} no encontrado`)
        }

        return resultado;
    }

    async getOpciones(){
        const todosTurnos = await this.turnoModel.find().exec()

        const integrantes = [...new Set(todosTurnos.map(t => t.integrante))].sort()
        const especialidades = [...new Set(todosTurnos.map(t => t.especialidad))].sort()
        const medicos = [...new Set(todosTurnos.map(t => t.medico).filter(m => m))].sort()
        const lugares = [...new Set(todosTurnos.map(t => t.lugarDeAtencion).filter(l => l))].sort()

        return{
            integrantes: integrantes.length > 0 ? integrantes: ["Integrante1"],
            especialidades: especialidades.length > 0 ? especialidades: ["Clínica Médica", "Dermatología"],
            medicos: medicos.length > 0 ? medicos: ["Dr. Zene", "Dra. Lena"],
            lugares: lugares.length> 0 ? lugares: ["consultorio Central", "sanatorio"]
        }
    }

    async confirmarYFormatear(dto: CreateTurnoDto){
        const nuevoTurno = await this.create(dto)
        return {
            message: "Turno solicitado correctamente",
            numeroOrden: nuevoTurno.numeroOrden,
            turno: nuevoTurno
        }
    }

    async findDisponible(filtros: FilterTurnoDto): Promise <any[]>{
        const diasABuscar= 7;
        const fechas = Array.from({ length: diasABuscar }).map((_, i) => {
            const dia = new Date()
            dia.setDate(dia.getDate() + i);
            return dia.toISOString().split('T')[0]
        })

        const medicosFiltrados = await this.getDataPrestadores(filtros)
        if(!medicosFiltrados){
            return []
        }

        const medicosIds = medicosFiltrados.map(m => m.profesional)
        const filtroBD: any = {
            medico: { $in: medicosIds },
            fecha: { $in: fechas }
        }

        const turnosReservados = await this.turnoModel.find(filtroBD, { medico: 1, fecha: 1, hora: 1, _id: 0}).exec()

        const reservadosPorMedico = turnosReservados.reduce((acc, turno) => {
            const key = `${turno.medico} | ${turno.fecha}`
            if(!acc[key]){
                acc[key] = []
            }
            acc[key].push(turno.hora)
            return acc
        }, {})

        const inventario: any[] = [] 
        for(const medico of medicosFiltrados){
            const disponibilidadMedico: { fecha: string, hora: string[]} [] = []
            let primerTurnoLibre: string | null = null

            for(const fecha of fechas){
                const key = `${medico.profesional} | ${fecha}`
                const horasReservadas = reservadosPorMedico[key] || []
                const horasDisponibles = HORARIO_BASE.filter(hora => !horasReservadas.includes(hora))
                if(horasDisponibles.length > 0){
                    disponibilidadMedico.push({ fecha, hora: horasDisponibles})

                    if(!primerTurnoLibre){
                        primerTurnoLibre = `${fecha} a las ${horasDisponibles[0]}`
                    }
                }
            }
            if(disponibilidadMedico.length > 0){
                inventario.push({
                    profesional: medico.profesional,
                    direccion: medico.direccion,
                    telefonos: medico.telefonos,
                    especialidad: medico.especialidad,
                    tipoPrestador: medico.tipoPrestador,
                    disponibilidad: disponibilidadMedico,
                    primerTurnoLibre: primerTurnoLibre,
                })
            }
        }
        return inventario
    }

    async insertMany(turnos: CreateTurnoDto[]): Promise<Turno[]>{
        return this.turnoModel.insertMany(turnos) as unknown as Promise <Turno[]>
    }

    async deleteAll(): Promise <void>{
        await this.turnoModel.deleteMany()
    }
}