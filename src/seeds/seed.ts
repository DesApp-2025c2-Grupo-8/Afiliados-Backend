import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { RecetasService } from "../recetas/recetas.service";
import { ReintegrosService } from "../reintegros/reintegros.service";
import { seedRecetas } from "./recetas.seed";
import { seedReintegros } from "./reintegros.seed";

async function bootstrap(){
    const appContext = await NestFactory.createApplicationContext(AppModule);

    const recetasService = appContext.get(RecetasService);
    const reintegrosService = appContext.get(ReintegrosService);

    await seedRecetas(recetasService);
    await seedReintegros(ReintegrosService);

    await appContext.close();
    console.log('Seed Completada');
   
}

bootstrap()