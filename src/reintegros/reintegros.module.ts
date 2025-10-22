import { Module } from '@nestjs/common';
import { ReintegrosController } from './reintegros.controller';
import { ReintegrosService } from './reintegros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Reintegro, ReintegroSchema } from 'src/schemas/reintegro.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Reintegro.name,
    schema: ReintegroSchema
  }])],
  controllers: [ReintegrosController],
  providers: [ReintegrosService]
})
export class ReintegrosModule {}
