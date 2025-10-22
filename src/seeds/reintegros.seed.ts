import { ReintegrosService } from "src/reintegros/reintegros.service";
import reintegros from '../data/reintegros'

export async function seedRecetas(recetasService: ReintegrosService) {

    await recetasService.deleteAll();

    await recetasService.insertMany(reintegros);

    console.log('reintegros creados: ', reintegros.length)
}