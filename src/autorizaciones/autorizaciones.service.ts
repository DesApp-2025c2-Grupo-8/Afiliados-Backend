import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Autorizacion } from '../schemas/autorizacion.schema';
import { Model } from 'mongoose';
import { CreateAutorizacionDto } from './dto/create-autorizacion.dto';

@Injectable()
export class AutorizacionesService {
    constructor(@InjectModel(Autorizacion.name) private AutorizacionModel: Model<Autorizacion>) { }

    async findAll(): Promise<Autorizacion[]> {
        return this.AutorizacionModel.find().exec();
    }

    async deleteAll(): Promise<void> {
        await this.AutorizacionModel.deleteMany({});
    }

    async findByNumeroAfiliado(nroABuscar: string): Promise<Autorizacion[]> {
        const afiliadoComun = nroABuscar.slice(0,7);
        const esTitular = nroABuscar.slice(7,9) === '01';

        if (esTitular) {
            const numeroAfiliadoComun = parseInt(afiliadoComun);
            const rangoInferior = numeroAfiliadoComun * 100;
            const rangoSuperior = numeroAfiliadoComun * 100 + 99
            return this.AutorizacionModel.find({numeroAfiliado: { $gte: rangoInferior, $lte: rangoSuperior } }).exec();
        } else {
            return this.AutorizacionModel.find({numeroAfiliado: parseInt(nroABuscar)}).exec();
        }
    }

    async create(autorizacionACrear: CreateAutorizacionDto) {
        const afiliado = autorizacionACrear.numeroAfiliado; //1234567-01
        const prefijoAutorizacion = 60
        const ultimaAutorizacion = await this.AutorizacionModel
            .findOne({ numeroAfiliado: afiliado })
            .sort({ numeroAutorizacion: -1 })
            .exec()

        const nuevoNumeroAutorizacion = ultimaAutorizacion ? ultimaAutorizacion.numeroAutorizacion + 1 : autorizacionACrear.numeroAfiliado * 1000000 + prefijoAutorizacion * 10000 + 1;

        const autorizacionCreada = new this.AutorizacionModel({
            ...autorizacionACrear,
            numeroAutorizacion: nuevoNumeroAutorizacion
        })

        return autorizacionCreada.save();
    }

    async insertMany(autorizaciones: CreateAutorizacionDto[]) {
        return this.AutorizacionModel.insertMany(autorizaciones).then((docs) => docs.map((d) => d.toObject()))
    }
}