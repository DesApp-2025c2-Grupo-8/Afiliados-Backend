import { ReintegrosService } from "src/reintegros/reintegros.service";
import reintegros from '../data/reintegros'

export async function seedReintegros(reintegrosService: ReintegrosService) {

    await reintegrosService.deleteAll();

    await reintegrosService.insertMany(reintegros);

    console.log('reintegros creados: ', reintegros.length)
}