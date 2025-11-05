import { Controller, Param ,Get, Post, Body, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { AutorizacionesService } from './autorizaciones.service';
import { CreateAutorizacionDto } from './dto/create-autorizacion.dto';
import { Autorizacion } from 'src/schemas/autorizacion.schema';

@Controller('autorizaciones')
export class AutorizacionesController {
    constructor(private AutorizacionesService: AutorizacionesService) { }

    @Get()
    findAll() {
        return this.AutorizacionesService.findAll();
    }


    @Get('/:numeroAfiliado')
        async findByNumeroAfiliado(@Param('numeroAfiliado') numeroAfiliado: string): Promise<Autorizacion[]> {
            if (!/^\d+$/.test(numeroAfiliado) || numeroAfiliado.length !== 9) throw new BadRequestException('El formato del número de afiliado es inválido');
            const autorizaciones = await this.AutorizacionesService.findByNumeroAfiliado(numeroAfiliado);
            if (!autorizaciones || autorizaciones.length === 0) throw new NotFoundException('No han sido encontradas recetas para el integrante especificado');
            return autorizaciones;
        }

    @Post()
    async create(@Body() autorizacionACrear: CreateAutorizacionDto): Promise<Autorizacion> {
        return this.AutorizacionesService.create(autorizacionACrear);
    }
}