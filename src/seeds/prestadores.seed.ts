import { PrestadoresService } from "src/prestadores/prestadores.service";
import prestadores from '../data/prestadores'

export async function seedPrestadores(prestadoresService: PrestadoresService) {

    console.log('Iniciando seed de prestadores...');

    await prestadoresService.deleteAll();

    console.log('Insertando prestadores...');

    await prestadoresService.insertMany(prestadores);

    console.log('prestadores creados: ', prestadores.length);
}