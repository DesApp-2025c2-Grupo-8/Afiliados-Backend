import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { RecetasService } from "../recetas/recetas.service";
import { ReintegrosService } from "../reintegros/reintegros.service";
import { PrestadoresService } from "src/prestadores/prestadores.service";
import { seedRecetas } from "./recetas.seed";
import { seedReintegros } from "./reintegros.seed";
import { seedPrestadores } from "./prestadores.seed";

async function bootstrap(){
    const appContext = await NestFactory.createApplicationContext(AppModule);

    const recetasService = appContext.get(RecetasService);
    const reintegrosService = appContext.get(ReintegrosService);
    console.log('Obtenido reintegrosService');
    const prestadoresService = appContext.get(PrestadoresService)

    await seedRecetas(recetasService);
    await seedReintegros(reintegrosService);
    await seedPrestadores(prestadoresService)

    await appContext.close();
    console.log('Seed Completada');
   
}

bootstrap()