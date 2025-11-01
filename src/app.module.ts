import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasModule } from './recetas/recetas.module';
import { ReintegrosModule } from './reintegros/reintegros.module';
import { TurnosModule } from './turnos/turnos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), RecetasModule, ReintegrosModule, TurnosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
