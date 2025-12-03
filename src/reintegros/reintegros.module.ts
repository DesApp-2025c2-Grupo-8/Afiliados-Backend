import { Module } from '@nestjs/common';
import { ReintegrosController } from './reintegros.controller';
import { ReintegrosService } from './reintegros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Reintegro, ReintegroSchema } from 'src/schemas/reintegro.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Reintegro.name,
      schema: ReintegroSchema
    }]),
    UsersModule
  ],
  controllers: [ReintegrosController],
  providers: [ReintegrosService]
})
export class ReintegrosModule {}
