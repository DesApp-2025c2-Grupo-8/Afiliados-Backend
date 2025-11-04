import { AutorizacionesService } from '../autorizaciones/autorizaciones.service'
import autorizaciones from '../data/autorizaciones'

export async function seedAutorizaciones(autorizacionACrear: AutorizacionesService) {

    await autorizacionACrear.deleteAll();

    await autorizacionACrear.insertMany(autorizaciones);

    console.log('autorizaciones creadas: ', autorizaciones.length)
}