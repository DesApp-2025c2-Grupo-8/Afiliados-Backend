import { Injectable } from '@nestjs/common';
import {CreateMedicamentoDto} from './dto/create-medicamento.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medicamento } from 'src/schemas/medicamento.schema';

@Injectable()
export class MedicamentosService {
    constructor(@InjectModel(Medicamento.name) private medicamentoModel: Model<Medicamento>) {}

    async create(medicamentoACrear: CreateMedicamentoDto): Promise<Medicamento> {
        const nuevoMedicamento = new this.medicamentoModel(medicamentoACrear);
        return nuevoMedicamento.save();
    }

    async findAll(): Promise<Medicamento[]> {  
        return this.medicamentoModel.find().exec();
    }

    async findById(id: string): Promise<Medicamento | null> {
        return this.medicamentoModel.findById(id).exec();
    }

    async remove(id: string): Promise<Medicamento | null> {
        return this.medicamentoModel.findByIdAndDelete(id).exec();
    }

    async deleteAll(): Promise<void> {
        await this.medicamentoModel.deleteMany({});
    }

    async insertMany(medicamentosACrear: CreateMedicamentoDto[]): Promise<Medicamento[]> {
        console.log('Insertando medicamentos en la base de datos...');
        return this.medicamentoModel.insertMany(medicamentosACrear).then((docs) => docs.map((d) => d.toObject()));
    }
}
