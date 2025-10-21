import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Autorizacion}  from '../schemas/autorizacion.schema';
import { Model } from 'mongoose';
import { CreateAutorizacionDto } from './dto/create-autorizacion.dto';

@Injectable()
export class AutorizacionesService{
    constructor(@InjectModel(Autorizacion.name) private AutorizacionModel: Model<Autorizacion> ){}

    async findAll(): Promise<Autorizacion[]>{
        return this.AutorizacionModel.find().exec();
    }

    
    async create(autorizacionACrear: CreateAutorizacionDto){
        const nuevaAutorizacion = new this.AutorizacionModel(autorizacionACrear);
        return nuevaAutorizacion.save();
    }
}