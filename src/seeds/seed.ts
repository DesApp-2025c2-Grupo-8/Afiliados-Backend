import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { RecetasService } from "../recetas/recetas.service";
import { AutorizacionesService } from "../autorizaciones/autorizaciones.service";
import { seedAutorizaciones } from "./autorizaciones.seed";
import { ReintegrosService } from "../reintegros/reintegros.service";
import { PrestadoresService } from "../prestadores/prestadores.service";
import { AfiliadosService } from "src/afiliados/afiliados.service";
import { seedRecetas } from "./recetas.seed";
import { seedReintegros } from "./reintegros.seed";
import { TurnosService } from "src/turnos/turnos.service";
import { seedTurnos } from "./turnos.seed";
import { seedPrestadores } from "./prestadores.seed";
import { seedAfiliados } from "./afiliados.seed";


async function bootstrap(){
    const appContext = await NestFactory.createApplicationContext(AppModule);

    const recetasService = appContext.get(RecetasService);
  
    const autorizacionesService = appContext.get(AutorizacionesService);
  
    const reintegrosService = appContext.get(ReintegrosService);
    
    const turnosService = appContext.get(TurnosService);

    const afiliadosService = appContext.get(AfiliadosService);

  
    console.log('Obtenido reintegrosService');
  
    const prestadoresService = appContext.get(PrestadoresService)
    
    await seedRecetas(recetasService);
  
    await seedReintegros(reintegrosService);

    await seedTurnos(turnosService)
  
    await seedPrestadores(prestadoresService)
  
    await seedAutorizaciones(autorizacionesService)

    await seedAfiliados(afiliadosService)


    await appContext.close();

    console.log('Seed Completada');
   
}

bootstrap()