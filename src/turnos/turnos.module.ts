import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TurnosService } from "./turnos.service"
import { TurnosController } from "./turnos.controller";
import { Turno, TurnoSchema } from "../schemas/turno.schema"

@Module({
    imports: [MongooseModule.forFeature([{ name: Turno.name, schema: TurnoSchema}])],
    controllers: [TurnosController],
    providers: [TurnosService]
})

export class TurnosModule {}