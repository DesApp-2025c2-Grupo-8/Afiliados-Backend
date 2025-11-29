import { AfiliadosService } from 'src/afiliados/afiliados.service';
import afiliados from '../data/afiliados'


export async function seedAfiliados(afiliadoACrear: AfiliadosService) {

    await afiliadoACrear.deleteAll();
    
    console.log('Coleccion afiliados limpiada');

    await afiliadoACrear.insertMany(afiliados);

    console.log('afiliados creados: ', afiliados.length)
}
