import { Controller, Get, Post, Body } from '@nestjs/common';
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
    async findByNumeroAfiliado(@Body('numeroAfiliado') numeroAfiliado: string): Promise<Autorizacion[]> {
        return this.AutorizacionesService.findByNumeroAfiliado(numeroAfiliado);
    }

    @Post()
    async create(@Body() autorizacionACrear: CreateAutorizacionDto): Promise<Autorizacion> {
        return this.AutorizacionesService.create(autorizacionACrear);
    }
}