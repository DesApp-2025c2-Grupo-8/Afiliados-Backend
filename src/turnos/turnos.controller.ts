import { Controller, Post, Get, Body, Param, Patch, Delete  } from "@nestjs/common";
import { TurnosService } from "./turnos.service"
import { CreateTurnoDto } from "./dto/create-turno.dto"
import { FilterTurnoDto } from "./dto/filter-turno.dto"
import { Turno } from "../schemas/turno.schema"


@Controller('turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService){}

    @Get('opciones')
    async getOpciones(){
        return this.turnosService.obtenerOpciones()
    }

    @Post('buscar')
    async buscarTurnos(@Body() body) {
        return this.turnosService.buscarTurnos(body)
    }

    @Post('confirmar')
    async confirmarTurno(@Body() turnoDto){
        return this.turnosService.confirmarTurno(turnoDto)
    }

    @Get('consulta/:numeroAfiliado')
    async findByAfiliadoId(@Param('numeroAfiliado') numeroAfiliado: number){
        return this.turnosService.consultarTurnosPorAfiliado(numeroAfiliado)
    }

    @Patch('cancelar/:id')
    async cancelarTurno(@Param('id') id: string){
        return this.turnosService.cancelarTurno(id);
    }

    @Delete()
    async deleteAll(){
        return this.turnosService.deleteAll()
    }

    @Post('insertMany')
    async insertMany(@Body() turnos: any[]){
        return this.turnosService.insertMany(turnos)
    }
}