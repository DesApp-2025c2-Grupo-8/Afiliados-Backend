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
import { PrestadoresService } from './prestadores.service';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { Prestador } from 'src/schemas/prestador.schema';

@Controller('prestadores')
export class PrestadoresController {
    constructor(private prestadoresService: PrestadoresService) {}
    
    @Get()
    async findAll(): Promise<Prestador[]> {
        return this.prestadoresService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Prestador | null> {
        const prestador = await this.prestadoresService.findById(id);
        if (!prestador) {
            throw new NotFoundException(`Prestador con id ${id} no encontrado`);
        }
        return prestador;
    }

    @Get('nombre/:nombre')
    async findByNombre(@Param('nombre') nombre: string): Promise<Prestador | null> {
        const prestador = await this.prestadoresService.findByNombre(nombre);
        if (!prestador) {
            throw new NotFoundException(`Prestador con nombre ${nombre} no encontrado`);
        }
        return prestador;
    }

    @Get('especialidad/:especialidad')
    async findByEspecialidad(@Param('especialidad') especialidad: string): Promise<Prestador[]> {
        return this.prestadoresService.findByEspecialidad(especialidad);
    }

    @Get('partido/:partido')
    async findByPartido(@Param('partido') partido: string): Promise<Prestador[]> {
        return this.prestadoresService.findByPartido(partido);
    }

    @Get('ubicacion/:ubicacion')
    async findByUbicacion(@Param('ubicacion') ubicacion: string): Promise<Prestador[]> {
        return this.prestadoresService.findByUbicacion(ubicacion);
    }

    @Post()
    async create(@Body() createPrestadorDto: CreatePrestadorDto): Promise<Prestador> {
        return this.prestadoresService.create(createPrestadorDto);
    }

}