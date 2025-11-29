import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('tipoDocumento') tipoDocumento: string,
    @Body('numeroDocumento') numeroDocumento: number,
    @Body('password') password: string,
  ) {
    return this.authService.login(tipoDocumento, numeroDocumento, password);
  }

  @Post('registro')
  async registro(
    @Body('email') email: string,
    @Body('tipoDocumento') tipoDocumento: string,
    @Body('numeroDocumento') numeroDocumento: number,
    @Body('password') password: string,
    @Body('fechaNacimiento') fechaNacimiento: Date,
    @Body('telefono') telefono?: number,
    @Body('direccion') direccion?: string,
  ) {
    return this.authService.registro(email, tipoDocumento, numeroDocumento, password, fechaNacimiento, telefono, direccion);
  }
}
