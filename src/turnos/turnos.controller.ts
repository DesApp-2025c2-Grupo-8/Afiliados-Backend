import { Controller, Post, Get, Body, Param, Patch, HttpCode, HttpStatus, BadRequestException, NotFoundException  } from "@nestjs/common";
import { TurnosService } from "./turnos.service"
import { CreateTurnoDto } from "./dto/create-turno.dto"
import { FilterTurnoDto } from "./dto/filter-turno.dto"
import { Turno } from "../schemas/turno.schema"


@Controller('turnos')
export class TurnosController {
    constructor(private turnosService: TurnosService){}

    @Get('opciones')
    async getOpciones(){
        return this.turnosService.getOpciones()
    }

    @Post('buscar')
    @HttpCode(HttpStatus.OK)
    async buscarTurnos(@Body() filtros: FilterTurnoDto) {
        return this.turnosService.findDisponible(filtros)
    }

    @Post('confirmar')
    async confirmarTurno(@Body() createTurnoDto: CreateTurnoDto){
        return this.turnosService.confirmarYFormatear(createTurnoDto)
    }

    @Get('consulta/:afiliadoId')
    async findByAfiliadoId(@Param('afiliadoId') afiliadoId: number): Promise<Turno[]>{
        const filtro: any = { numeroAfiliado: afiliadoId}

        const turnos = await this.turnosService.findAll(filtro);

        if(!turnos || turnos.length===0){
            throw new NotFoundException('No se encontraron turnos para el afiliado.')
        }

        return turnos;
    }

    @Patch('cancelar/:id')
    @HttpCode(HttpStatus.OK)
    async cancelarTurno(@Param('id') id: string){
        const turnoEliminado = await this.turnosService.delete(id)

        return {
            _id: (turnoEliminado as any)._id,
            message: "Turno cancelado correctamente"
        }
    }
}