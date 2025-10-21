import { 
    Body,
    Controller, 
    Get, 
    Post, 
    Param,
    BadRequestException,
    NotFoundException,
    InternalServerErrorException
} from '@nestjs/common';
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
        if (!/^\d+$/.test(numeroAfiliado) || numeroAfiliado.length !== 9) throw new BadRequestException('El formato del número de afiliado es inválido');
        const recetas = await this.recetaService.findByNumeroAfiliado(numeroAfiliado);
        if (!recetas || recetas.length === 0) throw new NotFoundException('No han sido encontradas recetas para el integrante especificado');
        return recetas;
    }

    @Post()
    async create(@Body() recetaACrear: CreateRecetaDto): Promise<Receta> {
        try {
            return this.recetaService.create(recetaACrear);
        } catch (error) {
            throw new InternalServerErrorException('No ha sido posible crear la receta');
        }
    }
}
