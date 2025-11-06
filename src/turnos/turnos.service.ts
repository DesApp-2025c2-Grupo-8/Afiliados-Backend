import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Turno, TurnoDocument } from "../schemas/turno.schema";
import { CreateTurnoDto } from "./dto/create-turno.dto";
import { Ubicacion } from "../schemas/turno.schema";
import { PrestadoresService } from "src/prestadores/prestadores.service";

const PREFIJO_TURNO = 50; 

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