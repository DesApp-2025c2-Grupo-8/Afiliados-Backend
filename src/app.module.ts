import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasModule } from './recetas/recetas.module';
import { AutorizacionesModule } from './autorizaciones/autorizaciones.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), RecetasModule, AutorizacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
