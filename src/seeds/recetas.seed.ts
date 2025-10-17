import { RecetasService } from "../recetas/recetas.service"
import recetas from '../data/recetas'

export async function seedRecetas(recetasService: RecetasService) {

    await recetasService.deleteAll();

    await recetasService.insertMany(recetas);

    console.log('recetas creadas: ', recetas.length)
}