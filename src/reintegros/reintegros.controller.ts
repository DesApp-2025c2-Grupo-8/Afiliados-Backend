import { Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';
import { ReintegrosService } from './reintegros.service';
// import { CreateReintegroDto } from './dto/create-reintegro.dto';
import { Reintegro } from 'src/schemas/reintegro.schema';
import { CreateReintegroDto } from './dto/create-reintegro.dto';

@Controller('reintegros')
export class ReintegrosController {
    constructor(private reintegroService: ReintegrosService) {}

    @Get()
    async findAll(): Promise<Reintegro[]> {
        return this.reintegroService.findAll()
    }

    @Post()
    async create(@Body() reintegroACrear: CreateReintegroDto): Promise<Reintegro> {
        try {
            return this.reintegroService.create(reintegroACrear);
        } catch (error) {
            throw new InternalServerErrorException('No ha sido posible crear el reintegro');
        }
    }
}
