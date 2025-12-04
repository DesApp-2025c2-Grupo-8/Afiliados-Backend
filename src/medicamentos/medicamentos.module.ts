import { Module } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { MedicamentosController } from './medicamentos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Medicamento, MedicamentoSchema } from 'src/schemas/medicamento.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Medicamento.name, schema: MedicamentoSchema }])],
  controllers: [MedicamentosController],
  providers: [MedicamentosService],
  exports: [MedicamentosService],
})
export class MedicamentosModule {}
