import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Turno, TurnoDocument } from "../schemas/turno.schema";
import { CreateTurnoDto } from "./dto/create-turno.dto";
import { FilterTurnoDto } from "./dto/filter-turno.dto"
import { Ubicacion } from "../schemas/turno.schema";
import { PrestadoresService } from "src/prestadores/prestadores.service";

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

        const hoy = new Date()

        const mapResultado = filtrados.map((p) => ({
            profesional: p.nombre,
            especialidad: p.especialidad,
            direccion: p.ubicacion,
            tipoPrestador: p.tipo,
            telefonos: p.telefono,
            primerTurnoLibre: hoy
        }))

        return mapResultado
    }

    async confirmarTurno(turnoDto: CreateTurnoDto){
        const nroOrdenGenerado = 1234

        const turnoParaGuardar = {
            ...turnoDto,
            numeroOrden: nroOrdenGenerado,
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