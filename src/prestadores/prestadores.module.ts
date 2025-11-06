import { Module } from '@nestjs/common';
import { PrestadoresController } from './prestadores.controller';
import { PrestadoresService } from './prestadores.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Prestador, PrestadorSchema } from 'src/schemas/prestador.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: Prestador.name,
        schema: PrestadorSchema
    }])],
    controllers: [PrestadoresController],
    providers: [PrestadoresService]
})
export class PrestadoresModule {}