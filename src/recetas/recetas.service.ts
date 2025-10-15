import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receta } from '../schemas/receta.schema';
import { CreateRecetaDto } from './dto/create-receta.dto';

@Injectable()
export class RecetasService {
    constructor(@InjectModel(Receta.name) private recetaModel: Model<Receta>){

    }

    async findAll(): Promise<Receta[]>{
        return this.recetaModel.find().exec();
    }

    async create(recetaACrear: CreateRecetaDto): Promise<Receta>{
        const recetaCreada = new this.recetaModel(recetaACrear);
        return recetaCreada.save();
    }
}
