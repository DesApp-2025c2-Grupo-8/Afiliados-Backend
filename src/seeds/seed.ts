import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { RecetasService } from "../recetas/recetas.service";
import { ReintegrosService } from "../reintegros/reintegros.service";
import { seedRecetas } from "./recetas.seed";
import { seedReintegros } from "./reintegros.seed";
import { TurnosService } from "src/turnos/turnos.service";
import { seedTurnos } from "./turnos.seed";

async function bootstrap(){
    const appContext = await NestFactory.createApplicationContext(AppModule);

    const recetasService = appContext.get(RecetasService);
    const reintegrosService = appContext.get(ReintegrosService);
    const turnosService = appContext.get(TurnosService);

    await seedRecetas(recetasService);
    await seedReintegros(reintegrosService);
    await seedTurnos(turnosService)

    await appContext.close();
    console.log('Seed Completada');
   
}

bootstrap()