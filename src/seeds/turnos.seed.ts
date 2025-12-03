import { TurnosService } from "../turnos/turnos.service"
import turnos from '../data/turnos'
import { CreateTurnoDto } from "src/turnos/dto/create-turno.dto"

const PREFIJO_TURNO = 30

export async function seedTurnos(turnosService: TurnosService): Promise<void>{
    const turnosData: CreateTurnoDto[] = Array.isArray(turnos) ? (turnos as CreateTurnoDto[]) : []

    if(turnosData.length===0) return

    const turnosConOrden = turnosData.map((turno, index) => {
        const numeroAfiliado = turno.numeroAfiliado;
        const numeroOrden = numeroAfiliado * 1000000 + PREFIJO_TURNO * 10000 + (index +1)
        
        return {
            ...turno,
            numeroOrden,
        }
    })
    
    await turnosService.deleteAll()

    await turnosService.insertMany(turnosConOrden)

    console.log('turnos creados: ', turnosConOrden.length)
}