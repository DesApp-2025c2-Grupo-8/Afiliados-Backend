import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reintegro } from 'src/schemas/reintegro.schema';
import { CreateReintegroDto } from './dto/create-reintegro.dto';

@Injectable()
export class ReintegrosService {
    constructor(@InjectModel(Reintegro.name) private reintegroModel: Model<Reintegro>) {}

    async findAll(): Promise<Reintegro[]> {
        return this.reintegroModel.find().exec();
    }

    async create(reintegroACrear: CreateReintegroDto): Promise<Reintegro> {
        const afiliado = reintegroACrear.numeroAfiliado;
        const prefijoReintegro = 40;
        const ultimoReintegro = await this.reintegroModel
            .findOne({ numeroAfiliado: afiliado})
            .sort({ numeroOrden: -1 })
            .exec();

        const nuevoNumeroOrden = ultimoReintegro 
            ? ultimoReintegro.numeroOrden + 1 
            : reintegroACrear.numeroAfiliado * 1000000 + prefijoReintegro * 10000 + 1; 
        
        const reintegroCreado = new this.reintegroModel({
            ...reintegroACrear,
            numeroOrden: nuevoNumeroOrden,
        });
        return reintegroCreado.save();
    }


}
