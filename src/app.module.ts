import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasModule } from './recetas/recetas.module';
import { ReintegrosModule } from './reintegros/reintegros.module';
import { PrestadoresModule } from './prestadores/prestadores.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), RecetasModule, ReintegrosModule, PrestadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
