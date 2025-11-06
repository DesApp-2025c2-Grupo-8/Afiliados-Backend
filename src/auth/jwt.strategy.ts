import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'supersecreto123',
    });
  }

  async validate(payload: any) {
    // Datos que viajarán dentro del token
    return { numeroAfiliado: payload.sub, nombre: payload.nombre, rol: payload.rol };
  }
}
