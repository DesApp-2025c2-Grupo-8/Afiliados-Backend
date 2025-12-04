import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Patch,
    BadRequestException,
    NotFoundException,
    InternalServerErrorException
} from '@nestjs/common';
import { ReintegrosService } from './reintegros.service';
// import { CreateReintegroDto } from './dto/create-reintegro.dto';
import { Reintegro } from 'src/schemas/reintegro.schema';
import { CreateReintegroDto } from './dto/create-reintegro.dto';

@Controller('reintegros')
export class ReintegrosController {
    constructor(private reintegroService: ReintegrosService) { }

    @Get()
    async findAll(): Promise<Reintegro[]> {
        return this.reintegroService.findAll()
    }

    @Get('/:numeroAfiliado')
    async findByNumeroAfiliado(@Param('numeroAfiliado') numeroAfiliado: string): Promise<Reintegro[]> {
        if (!/^\d+$/.test(numeroAfiliado) || numeroAfiliado.length !== 9) throw new BadRequestException('El formato del número de afiliado es inválido');
        const reintegros = await this.reintegroService.findByNumeroAfiliado(numeroAfiliado);
        if (!reintegros || reintegros.length === 0) throw new NotFoundException('No han sido encontrados reintegros para el integrante especificado');
        return reintegros;
    }

    @Post()
    async create(@Body() reintegroACrear: CreateReintegroDto): Promise<Reintegro> {
        try {
            return this.reintegroService.create(reintegroACrear);
        } catch (error) {
            throw new InternalServerErrorException('No ha sido posible crear el reintegro');
        }
    }


    // @Patch('/:numeroOrden')
    // async editarObservaciones(
    //     @Param('numeroOrden') numeroOrden: number,
    //     @Body('observaciones') observaciones: string,
    //     @Body('estado') estado: string
    // ) {
    //     return this.reintegroService.editarObservaciones(
    //         numeroOrden,
    //         observaciones,
    //         estado
    //     )
    // }
}
