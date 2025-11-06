import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Turno, TurnoDocument } from "../schemas/turno.schema";
import { CreateTurnoDto } from "./dto/create-turno.dto";
import { Ubicacion } from "../schemas/turno.schema";
import { PrestadoresService } from "src/prestadores/prestadores.service";

const PREFIJO_TURNO = 50;

const generarDisponibilidadPrueba = () => {
    const hoy = new Date();
    const mañana = new Date(hoy);
    mañana.setDate(hoy.getDate() + 1);
    
    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    return [
        {
            fecha: formatDate(hoy),
            hora: ["08:00", "09:30", "11:00", "14:00", "15:30"]
        },
        {
            fecha: formatDate(mañana),
            hora: ["08:00", "09:30", "11:00", "14:00", "15:30"]
        },
    ];
};

@Injectable()
export class TurnosService {
    constructor(@InjectModel(Turno.name) private turnoModel: Model <Turno>, private prestadoresService: PrestadoresService,){}

    async obtenerOpciones(){
        const prestadores = (await this.prestadoresService.findAll()) || []
        const especialidades = [... new Set(prestadores.map(p => p.especialidad))]
        const medicos = [...new Set(prestadores.map(p => p.nombre))]

        const listaPartidos = [...new Set(prestadores.flatMap(p => p.ubicacion).map(u => u.partido))]

        return{
            especialidades, 
            medicos,
            lugares: listaPartidos
        }
    }

    async buscarTurnos(filtro: {
        especialidad: string;
        medico?: string;
        lugarDeAtencion?: string
    }) {
        const { especialidad, medico, lugarDeAtencion } = filtro

        const prestadores = (await this.prestadoresService.findAll()) || []

        const filtrados = prestadores.filter((p) =>{
            const especialidadPrestador = !especialidad || p.especialidad === especialidad
            const medicoPrestador = !medico || p.nombre === medico
            const lugarPrestador = !lugarDeAtencion || p.ubicacion.some(u => u.partido === lugarDeAtencion)

            return especialidadPrestador && medicoPrestador && lugarPrestador;
        })

        const condicionBusqueda: any = { especialidad: especialidad };
        if (medico) {
            condicionBusqueda.medico = medico;
        }
        
        const turnosOcupados = await this.turnoModel.find(condicionBusqueda, 'medico fecha hora').lean().exec();
        
        const obtenerDisponibilidadReal = (nombreMedico: string) => {
            const disponibilidadBase = generarDisponibilidadPrueba()
            
            const ocupadosMedico = turnosOcupados.filter(t => t.medico === nombreMedico)

            return disponibilidadBase.map(diaBase => {
                const fechaBase = diaBase.fecha;
                const horasOcupadasEnDia = ocupadosMedico
                    .filter(t => t.fecha === fechaBase)
                    .map(t => t.hora)

                const horasDisponibles = diaBase.hora.filter(
                    hora => !horasOcupadasEnDia.includes(hora)
                )
                
                return {
                    fecha: fechaBase,
                    hora: horasDisponibles
                };
            }).filter(dia => dia.hora.length > 0)
        }

        const mapResultado = filtrados.map((p) => {
            const disponibilidadFinal = obtenerDisponibilidadReal(p.nombre)

            return {
                profesional: p.nombre,
                especialidad: p.especialidad,
                direccion: p.ubicacion,
                tipoPrestador: p.tipo,
                telefonos: p.telefono,
                disponibilidad: disponibilidadFinal 
            }
        }).filter(p => p.disponibilidad.length > 0); 
        if (mapResultado.length === 0) {
             throw new NotFoundException('No se encontraron turnos disponibles con los criterios de búsqueda.');
        }

        return mapResultado
    }

    async confirmarTurno(turnoDto: CreateTurnoDto){
        const turnoExistente = await this.turnoModel.findOne({
            medico: turnoDto.medico,
            fecha: turnoDto.fecha,
            hora: turnoDto.hora
        }).exec();

        if (turnoExistente) {
             throw new InternalServerErrorException('El turno seleccionado ya fue solicitado.');
        }
        
        const afiliado = turnoDto.numeroAfiliado;

        const ultimoTurno = await this.turnoModel
            .findOne({ numeroAfiliado: afiliado })
            .sort({ numeroOrden: -1 })
            .exec();

        let nroOrdenGenerado: number;

        if (ultimoTurno) {
            nroOrdenGenerado = ultimoTurno.numeroOrden + 1;
        } else {
            nroOrdenGenerado = afiliado * 1000000 + PREFIJO_TURNO * 10000 + 1;
        }
        
        const prestadores = await this.prestadoresService.findAll();

        const prestadorEncontrado = prestadores.find(p => 
            p.nombre === turnoDto.medico && p.especialidad === turnoDto.especialidad
        );

        if (!prestadorEncontrado) {
            throw new NotFoundException(`Prestador ${turnoDto.medico} no encontrado.`);
        }

        const turnoParaGuardar = {
            ...turnoDto,
            numeroOrden: nroOrdenGenerado,
            lugarDeAtencion: prestadorEncontrado.ubicacion, 
        }

        const turno = new this.turnoModel(turnoParaGuardar)

        await turno.save()
        return { message: 'Turno solicitado', numeroOrden: nroOrdenGenerado}
    }

    async consultarTurnosPorAfiliado(numeroAfiliado: number){
        return await this.turnoModel.find({ numeroAfiliado }).lean()
    }

    async cancelarTurno(id: string){
        return await this.turnoModel.findByIdAndDelete(id)
    }

    async insertMany(turnos: CreateTurnoDto[]): Promise<Turno[]>{
        return this.turnoModel.insertMany(turnos) as unknown as Promise <Turno[]>
    }

    async deleteAll(): Promise <void>{
        await this.turnoModel.deleteMany()
    }
}