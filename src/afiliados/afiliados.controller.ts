import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AfiliadosService } from './afiliados.service';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import {Afiliado} from 'src/schemas/afiliado.schema';

@Controller('afiliados')
export class AfiliadosController {
  constructor(private readonly afiliadosService: AfiliadosService) {}

  @Get()
  async findAll(): Promise<Afiliado[]> {
    return this.afiliadosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Afiliado | null> {
    return this.afiliadosService.findById(id);
  }

  @Get('numeroAfiliado/:numeroAfiliado')
  async findByNumeroAfiliado(@Param('numeroAfiliado') numeroAfiliado: number): Promise<Afiliado | null> {
    return this.afiliadosService.findByNumeroAfiliado(numeroAfiliado);
  }

  @Get('tipoDocumento/:tipoDocumento/numeroDocumento/:numeroDocumento')
  async findByTipoYNumeroDocumento(@Param('tipoDocumento') tipoDocumento: string, @Param('numeroDocumento') numeroDocumento: number): Promise<Afiliado | null> {
    return this.afiliadosService.findByTipoYNumeroDocumento(tipoDocumento, numeroDocumento);
  }

  @Post()
  async create(@Body() createAfiliadoDto: CreateAfiliadoDto): Promise<Afiliado> {
    return this.afiliadosService.create(createAfiliadoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Afiliado | null> {
    return this.afiliadosService.remove(id);
  }

}
