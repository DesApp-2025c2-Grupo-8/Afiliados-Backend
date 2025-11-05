import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TurnosService } from "./turnos.service"
import { TurnosController } from "./turnos.controller";
import { Turno, TurnoSchema } from "../schemas/turno.schema"
import { PrestadoresModule } from "../prestadores/prestadores.module";

@Module({
    imports: [MongooseModule.forFeature([{ name: Turno.name, schema: TurnoSchema}]), PrestadoresModule],
    controllers: [TurnosController],
    providers: [TurnosService],
    exports: [TurnosService]
})

export class TurnosModule {}