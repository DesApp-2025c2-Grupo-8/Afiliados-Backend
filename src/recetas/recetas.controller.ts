import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { RecetasService } from './recetas.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { Receta } from 'src/schemas/receta.schema';
import path from 'path';

@Controller('recetas')
export class RecetasController {
    constructor(private recetaService: RecetasService) {}

    @Get()
    async findAll(): Promise<Receta[]> {
        return this.recetaService.findAll();
    }

    @Get('/:numeroAfiliado')
    async findByNumeroAfiliado(@Param('numeroAfiliado') numeroAfiliado: string): Promise<Receta[]> {
        return this.recetaService.findByNumeroAfiliado(numeroAfiliado);
    }

    @Post()
    async create(@Body() recetaACrear: CreateRecetaDto): Promise<Receta> {
        return this.recetaService.create(recetaACrear);
    }
}
