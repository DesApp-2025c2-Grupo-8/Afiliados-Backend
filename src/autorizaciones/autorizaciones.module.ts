import { Module } from '@nestjs/common';
import { AutorizacionesController } from './autorizaciones.controller';
import { AutorizacionesService } from './autorizaciones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Autorizacion, AutorizacionSchema } from '../schemas/autorizacion.schema';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Autorizacion.name,
            schema: AutorizacionSchema
        }]),
        UsersModule
    ],
    controllers: [AutorizacionesController],
    providers: [AutorizacionesService]
})
export class AutorizacionesModule { }
