import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { AfiliadosService } from 'src/afiliados/afiliados.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private afiliadosService: AfiliadosService) { }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async findByNumeroAfiliado(numeroAfiliado: number): Promise<User | null> {
    return this.userModel.findOne({ numeroAfiliado: numeroAfiliado }).exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email: email }).exec();
  }

  async findByNumeroDocumento(numeroDocumento: number): Promise<User | null> {
    return this.userModel.findOne({ numeroDocumento: numeroDocumento }).exec();
  }

  async findByTipoYNumeroDocumento(tipoDocumento: string, numeroDocumento: number): Promise<User | null> {
    return this.userModel.findOne({ tipoDocumento, numeroDocumento }).exec();
  }

  async findByTipoYNumeroDocumentoYpassword(
    tipoDocumento: string,
    numeroDocumento: number,
    password: string,
  ): Promise<User | null> {
    if (!tipoDocumento || numeroDocumento == null || !password) {
      return null;
    }

    const user = await this.userModel.findOne({ tipoDocumento, numeroDocumento }).exec();
    if (!user) return null;
    const match = await bcrypt.compare(password, user.password || '');
    if (!match) return null;

    const safeUser = user.toObject();
    delete (safeUser as any).password;
    delete (safeUser as any).__v;
    delete (safeUser as any)._id;

    return safeUser;
  }





  async create(userACrear: CreateUserDto): Promise<User> {

    const afiliadoExistente = await this.afiliadosService.findByTipoYNumeroDocumento(userACrear.tipoDocumento, userACrear.numeroDocumento);

    if (!afiliadoExistente) {
      throw new UnauthorizedException('No existe un afiliado con el tipo y número de documento proporcionados.');
    }

    if (new Date(afiliadoExistente.fechaNacimiento).getTime() !== new Date(userACrear.fechaNacimiento).getTime()) {
      throw new UnauthorizedException('La fecha de nacimiento no coincide con la del afiliado existente.');
    }

    const hashPassword = await bcrypt.hash(userACrear.password, 10);
    userACrear.password = hashPassword;

    const nuevoUser = new this.userModel({
      ...userACrear,
      nombre: afiliadoExistente.nombre,
      apellido: afiliadoExistente.apellido,
      numeroAfiliado: afiliadoExistente.numeroAfiliado,
      rol: afiliadoExistente.rol,
      planMedico: afiliadoExistente.planMedico,
      grupoFamiliar: afiliadoExistente.grupoFamiliar,
    });
    return nuevoUser.save();
  }

  async update(id: string, userAActualizar: UpdateUserDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, userAActualizar, { new: true }).exec();
  }

  async actualizarTelefonoCorreoYDireccionPorNumeroAfiliado(
    numeroAfiliado: number,
    telefono: string,
    email: string,
    direccion: string,
  ): Promise<User | null> {
    return this.userModel.findOneAndUpdate(
      { numeroAfiliado },
      { telefono, email, direccion },
      { new: true },
    ).exec();
  }

  async remove(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async deleteAll(): Promise<void> {
    await this.userModel.deleteMany({});
  }

  async insertMany(usersACrear: CreateUserDto[]): Promise<User[]> {
    return this.userModel.insertMany(usersACrear).then((docs) => docs.map((d) => d.toObject()));
  }

}
