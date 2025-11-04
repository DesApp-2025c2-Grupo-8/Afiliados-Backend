import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prestador } from 'src/schemas/prestador.schema';
import { CreatePrestadorDto } from './dto/create-prestador.dto';

@Injectable()
export class PrestadoresService {
    constructor(@InjectModel(Prestador.name) private prestadorModel: Model<Prestador>) {}
    
    async findAll(): Promise<Prestador[]> {
        return this.prestadorModel.find().exec();
    }

    async findByEspecialidad(especialidadBuscada: string): Promise<Prestador[]> {
        return this.prestadorModel.find({ especialidad: especialidadBuscada }).exec();
    }

    async findByPartido(partidoBuscado: string): Promise<Prestador[]> {
        return this.prestadorModel.find({ partido: partidoBuscado }).exec();
    }

    async findByUbicacion(ubicacionBuscada: string): Promise<Prestador[]> {
        return this.prestadorModel.find({ ubicacion: ubicacionBuscada }).exec();
    }  

    async findById(id: string): Promise<Prestador | null> {
        return this.prestadorModel.findById(id).exec();
    }

    async findByNombre(nombreBuscado: string): Promise<Prestador | null> {
        return this.prestadorModel.findOne({ nombre: nombreBuscado }).exec();
    }

    async create(prestadorACrear: CreatePrestadorDto): Promise<Prestador> {
        const nuevoPrestador = new this.prestadorModel(prestadorACrear);
        return nuevoPrestador.save();
    }

    async deleteAll(): Promise<void> {
        await this.prestadorModel.deleteMany({});
    }

    async insertMany(prestadoresACrear: CreatePrestadorDto[]): Promise<Prestador[]> {
        console.log('Insertando prestadores en la base de datos...');
        return this.prestadorModel.insertMany(prestadoresACrear).then((docs) => docs.map((d) => d.toObject()));
    }

}