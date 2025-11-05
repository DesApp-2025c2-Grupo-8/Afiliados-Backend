import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(tipoDocumento: string, numeroDocumento: number, password: string) {
    const user = await this.usersService.findByTipoYNumeroDocumentoYpassword(
      tipoDocumento,
      numeroDocumento,
      password,
    );

    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    // Crear token con datos básicos
    const payload = {
      sub: user.numeroAfiliado,
      nombre: user.nombre,
      apellido: user.apellido,
      rol: user.rol,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
