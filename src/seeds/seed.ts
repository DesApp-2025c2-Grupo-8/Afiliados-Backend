import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { RecetasService } from "../recetas/recetas.service";
import { AutorizacionesService } from "../autorizaciones/autorizaciones.service";
import { seedRecetas } from "./recetas.seed";
import { seedAutorizaciones } from "./autorizaciones.seed";

async function bootstrap(){
    const appContext = await NestFactory.createApplicationContext(AppModule);
    const recetasService = appContext.get(RecetasService);
    const autorizacionesService = appContext.get(AutorizacionesService);

    await seedRecetas(recetasService)
    await seedAutorizaciones(autorizacionesService)

    await appContext.close();

    console.log('Seed Completada');
   
}

bootstrap()