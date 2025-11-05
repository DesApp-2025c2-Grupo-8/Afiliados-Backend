import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasModule } from './recetas/recetas.module';
import { AutorizacionesModule } from './autorizaciones/autorizaciones.module';
import { ReintegrosModule } from './reintegros/reintegros.module';
import { PrestadoresModule } from './prestadores/prestadores.module';
import { UsersModule } from './users/users.module';
import { AfiliadosModule } from './afiliados/afiliados.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), RecetasModule, ReintegrosModule, PrestadoresModule, AutorizacionesModule, UsersModule, AfiliadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
