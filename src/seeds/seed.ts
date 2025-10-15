import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { RecetasService } from "../recetas/recetas.service";
import { seedRecetas } from "./recetas.seed";

async function bootstrap(){
    const appContext = await NestFactory.createApplicationContext(AppModule);
    const recetasService = appContext.get(RecetasService);

    await seedRecetas(recetasService)

    await appContext.close();

    console.log('Seed Completada');
   
}

bootstrap()