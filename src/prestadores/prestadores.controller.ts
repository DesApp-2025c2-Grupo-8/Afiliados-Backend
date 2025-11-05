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
    //partido esta dentro de un objeto literal dentro del array ubicacion
    @Get('partido/:partido')
    async findByPartido(@Param('partido') partido: string): Promise<Prestador[]> {
        return this.prestadoresService.findByPartido(partido);
    }

    @Get('direccion/:direccion')
    async findByDireccion(@Param('direccion') direccion: string): Promise<Prestador[]> {
        return this.prestadoresService.findByDireccion(direccion);
    }

    @Post()
    async create(@Body() createPrestadorDto: CreatePrestadorDto): Promise<Prestador> {
        return this.prestadoresService.create(createPrestadorDto);
    }

}