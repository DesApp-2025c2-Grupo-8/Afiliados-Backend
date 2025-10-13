import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasModule } from './recetas/recetas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), RecetasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
