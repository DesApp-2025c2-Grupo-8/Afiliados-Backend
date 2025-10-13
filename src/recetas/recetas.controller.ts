import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecetasService } from './recetas.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { Receta } from 'src/schemas/receta.schema';

@Controller('recetas')
export class RecetasController {
    constructor(private recetaService: RecetasService) {}

    @Get()
    async findAll(): Promise<Receta[]> {
        return this.recetaService.findAll();
    }

    @Post()
    async create(@Body() recetaACrear: CreateRecetaDto): Promise<Receta> {
        return this.recetaService.create(recetaACrear);
    }
}
