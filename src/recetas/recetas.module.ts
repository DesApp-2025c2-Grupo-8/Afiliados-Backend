import { Module } from '@nestjs/common';
import { RecetasController } from './recetas.controller';
import { RecetasService } from './recetas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Receta, RecetaSchema } from 'src/schemas/receta.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Receta.name,
    schema: RecetaSchema
  }])],
  controllers: [RecetasController],
  providers: [RecetasService]
})
export class RecetasModule {}
