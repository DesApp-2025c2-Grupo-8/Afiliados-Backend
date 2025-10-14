import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receta } from '../schemas/receta.schema';
import { CreateRecetaDto } from './dto/create-receta.dto';

@Injectable()
export class RecetasService {
  constructor(
    @InjectModel(Receta.name) private recetaModel: Model<Receta>,
  ) {}

  async findAll(): Promise<Receta[]> {
    return this.recetaModel.find().exec();
  }

  async create(recetaACrear: CreateRecetaDto): Promise<Receta> {
    // Buscar la última receta creada, ordenada por numeroOrden descendente
    const ultimaReceta = await this.recetaModel
      .findOne()
      .sort({ numeroOrden: -1 })
      .exec();

    // Calcular el nuevo número
    const nuevoNumeroOrden = ultimaReceta ? ultimaReceta.numeroOrden + 1 : 1;

    // Crear la nueva receta con ese número
    const recetaCreada = new this.recetaModel({
      ...recetaACrear,
      numeroOrden: nuevoNumeroOrden,
    });

    return recetaCreada.save();
  }
}
