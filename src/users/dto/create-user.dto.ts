import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  fechaNacimiento: Date;

  @IsNumber()
  @IsOptional()
  telefono?: number;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsNumber()
  @IsNotEmpty()
  numeroDocumento: number;

  @IsString()
  @IsNotEmpty()
  tipoDocumento: string;

}
