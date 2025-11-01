import { TurnosService } from "../turnos/turnos.service"
import turnos from '../data/turnos'
import { CreateTurnoDto } from "src/turnos/dto/create-turno.dto"

const PREFIJO_TURNO = 30

type TurnoSeederDto = CreateTurnoDto & {numeroOrden: number}

export async function seedTurnos(turnosService: TurnosService){
    await turnosService.deleteAll()

    const turnosConOrden: TurnoSeederDto[] = []
    let secuencia = 0

    for(const turno of turnos){
        let nuevoNumeroOrden: number;
        secuencia++

        if(secuencia===1){
            const nroAfiliadoBase = parseInt(turno.numeroAfiliado.toString().slice(0,7))
            nuevoNumeroOrden = nroAfiliadoBase * 1000000 + PREFIJO_TURNO * 10000 + secuencia
        }else{
            const ultimoNumero = turnosConOrden[turnosConOrden.length -1].numeroOrden
            nuevoNumeroOrden = ultimoNumero +1
        }

        turnosConOrden.push({...turno, numeroOrden: nuevoNumeroOrden} as TurnoSeederDto)
    }
    await turnosService.insertMany(turnosConOrden)

    console.log('turnos creados: ', turnosConOrden.length)
}