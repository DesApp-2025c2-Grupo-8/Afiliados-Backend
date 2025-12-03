import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findById(id);
  }

  @Get('numeroAfiliado/:numeroAfiliado')
  async findByNumeroAfiliado(@Param('numeroAfiliado') numeroAfiliado: number): Promise<User | null> {
    return this.usersService.findByNumeroAfiliado(numeroAfiliado);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<User | null> {
    return this.usersService.findByEmail(email);
  }

  @Get('numeroDocumento/:numeroDocumento')
  async findByNumeroDocumento(@Param('numeroDocumento') numeroDocumento: number): Promise<User | null> {
    return this.usersService.findByNumeroDocumento(numeroDocumento);
  }

  @Get('/tipoDocumento/:tipoDocumento/numeroDocumento/:numeroDocumento/password/:password')
  async findByTipoYNumeroDocumentoYpassword(@Param('tipoDocumento') tipoDocumento: string, @Param('numeroDocumento') numeroDocumento: number, @Param('password') password: string): Promise<User | null> {

    return this.usersService.findByTipoYNumeroDocumentoYpassword(tipoDocumento, numeroDocumento, password);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch('/actualizarInfo/numeroAfiliado/:numeroAfiliado')
  async actualizarTelefonoCorreoYDireccionPorNumeroAfiliado(
    @Param('numeroAfiliado') numeroAfiliado: number,
    @Body('telefono') telefono: string,
    @Body('email') email: string,
    @Body('direccion') direccion: string,
  ): Promise<User | null> {
    return this.usersService.actualizarTelefonoCorreoYDireccionPorNumeroAfiliado(numeroAfiliado, telefono, email, direccion);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User | null> {
    return this.usersService.remove(id);
  }

}
