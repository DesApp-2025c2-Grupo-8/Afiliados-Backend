import { Module } from '@nestjs/common';
import { AfiliadosService } from './afiliados.service';
import { AfiliadosController } from './afiliados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Afiliado, AfiliadoSchema } from 'src/schemas/afiliado.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Afiliado.name,
    schema: AfiliadoSchema
  }])],
  controllers: [AfiliadosController],
  providers: [AfiliadosService],
  exports: [AfiliadosService],
})
export class AfiliadosModule {}
