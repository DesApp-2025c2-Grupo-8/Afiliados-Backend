import { Injectable } from '@nestjs/common';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Afiliado } from 'src/schemas/afiliado.schema';

@Injectable()
export class AfiliadosService {
  constructor(@InjectModel(Afiliado.name) private afiliadoModel: Model<Afiliado>) {}

  async findAll(): Promise<Afiliado[]> {  
    return this.afiliadoModel.find().exec();
  }

  async findById(id: string): Promise<Afiliado | null> {
    return this.afiliadoModel.findById(id).exec();
  }

  async findByNumeroAfiliado(numeroAfiliado: number): Promise<Afiliado | null> {
    return this.afiliadoModel.findOne({ numeroAfiliado: numeroAfiliado }).exec();
  }

  async findByTipoYNumeroDocumento(tipoDocumento: string, numeroDocumento: number): Promise<Afiliado | null> {  
    return this.afiliadoModel.findOne({ tipoDocumento: tipoDocumento, numeroDocumento: numeroDocumento }).exec();
  }

  async create(afiliadoACrear: CreateAfiliadoDto): Promise<Afiliado> {
    const nuevoAfiliado = new this.afiliadoModel(afiliadoACrear);
    return nuevoAfiliado.save();
  }

  async deleteAll(): Promise<void> {
    await this.afiliadoModel.deleteMany({});
  }

  async insertMany(afiliadosACrear: CreateAfiliadoDto[]): Promise<Afiliado[]> {
    console.log('Insertando afiliados en la base de datos...');
    return this.afiliadoModel.insertMany(afiliadosACrear).then((docs) => docs.map((d) => d.toObject()));
  }

  async remove(id: string): Promise<Afiliado | null> {
    return this.afiliadoModel.findByIdAndDelete(id).exec();
  }
}
