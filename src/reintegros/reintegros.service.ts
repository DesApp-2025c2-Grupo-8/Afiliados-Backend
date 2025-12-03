import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reintegro } from 'src/schemas/reintegro.schema';
import { CreateReintegroDto } from './dto/create-reintegro.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ReintegrosService {
    constructor(
        @InjectModel(Reintegro.name) 
            private reintegroModel: Model<Reintegro>,
            private usersService: UsersService
    ) {}

    async findAll(): Promise<Reintegro[]> {
        return this.reintegroModel.find().exec();
    }

    async findByNumeroAfiliado(nroABuscar: string): Promise<Reintegro[]> {
        const usuario = await this.usersService.findByNumeroAfiliado(Number(nroABuscar));
        if (!usuario) return []

        const numeroAfiliadoComun = Math.floor(usuario.numeroAfiliado / 100); // Para quedarnos con los primeros 7 digitos
        const rangoSuperior = numeroAfiliadoComun * 100 + 99;   // numeroAfiliado + 99
        if (usuario.rol === 'TITULAR') {
            const rangoInferior = numeroAfiliadoComun * 100;        // numeroAfiliado + 00

            return this.reintegroModel.find({numeroAfiliado: { $gte: rangoInferior, $lte: rangoSuperior } }).exec();
        } else if (usuario.rol === 'CONYUGE') {
            const rangoInferior = numeroAfiliadoComun * 100 +  2;   // numeroAfiliado + 02 Para que solamente pueda ver los reintegros propios y la de los hijos

            return this.reintegroModel.find({numeroAfiliado: { $gte: rangoInferior, $lte: rangoSuperior } }).exec();
        } else {
            return this.reintegroModel.find({numeroAfiliado: parseInt(nroABuscar)}).exec();
        }
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

    async insertMany(reintegros: CreateReintegroDto[]): Promise<Reintegro[]> {
        return this.reintegroModel.insertMany(reintegros).then((docs) => docs.map((d) => d.toObject()));
    }

    async deleteAll(): Promise<void> {
        await this.reintegroModel.deleteMany({});
    }

}
