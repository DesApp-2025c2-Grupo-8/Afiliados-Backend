import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasModule } from './recetas/recetas.module';
import { AutorizacionesModule } from './autorizaciones/autorizaciones.module';
import { ReintegrosModule } from './reintegros/reintegros.module';
import { TurnosModule } from './turnos/turnos.module';
import { PrestadoresModule } from './prestadores/prestadores.module';
import { UsersModule } from './users/users.module';
import { AfiliadosModule } from './afiliados/afiliados.module';
import { AuthModule } from './auth/auth.module';
import { MedicamentosController } from './medicamentos/medicamentos.controller';
import { MedicamentosModule } from './medicamentos/medicamentos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), RecetasModule, ReintegrosModule, PrestadoresModule, AutorizacionesModule, UsersModule, AfiliadosModule, AuthModule, TurnosModule, MedicamentosModule],
  controllers: [MedicamentosController],
  providers: [],
})
export class AppModule {}
