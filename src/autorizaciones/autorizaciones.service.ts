import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Autorizacion } from '../schemas/autorizacion.schema';
import { Model } from 'mongoose';
import { CreateAutorizacionDto } from './dto/create-autorizacion.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AutorizacionesService {
    constructor(
        @InjectModel(Autorizacion.name) 
            private AutorizacionModel: Model<Autorizacion>,
            private usersService: UsersService
        ) {}

    async findAll(): Promise<Autorizacion[]> {
        return this.AutorizacionModel.find().exec();
    }

    async deleteAll(): Promise<void> {
        await this.AutorizacionModel.deleteMany({});
    }

    async findByNumeroAfiliado(nroABuscar: string): Promise<Autorizacion[]> {
        const usuario = await this.usersService.findByNumeroAfiliado(Number(nroABuscar));
        if (!usuario) return []
        
        const numeroAfiliadoComun = Math.floor(usuario.numeroAfiliado / 100); // Para quedarnos con los primeros 7 digitos
        const rangoSuperior = numeroAfiliadoComun * 100 + 99;   // numeroAfiliado + 99
        if (usuario.rol === 'TITULAR') {
            const rangoInferior = numeroAfiliadoComun * 100;
            return this.AutorizacionModel.find({numeroAfiliado: { $gte: rangoInferior, $lte: rangoSuperior } }).exec();
        } else if (usuario.rol === 'CONYUGE') {
            const rangoInferior = numeroAfiliadoComun * 100 +  2;   // numeroAfiliado + 02 Para que solamente pueda ver las autorizaciones propias y la de los hijos
            return this.AutorizacionModel.find({numeroAfiliado: { $gte: rangoInferior, $lte: rangoSuperior } }).exec();
        } else {
            return this.AutorizacionModel.find({numeroAfiliado: parseInt(nroABuscar)}).exec();
        }
    }

    async create(autorizacionACrear: CreateAutorizacionDto): Promise<Autorizacion> {
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

    async editarObservaciones(numeroAutorizacion: number, observaciones: string , estado: string) {
        const autorizacion = await this.AutorizacionModel.findOneAndUpdate(
            { numeroAutorizacion},
            { observaciones, estado},
            { new: true}
        );

        if (!autorizacion) {
            throw new Error('Autorización no encontrada')
        }

        return autorizacion
    }
}