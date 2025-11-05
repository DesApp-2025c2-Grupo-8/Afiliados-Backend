//datos que vienen desde el cliente
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAutorizacionDto {

    @IsNotEmpty()
    @IsString()
    integrante: string;

    @IsNotEmpty()
    @IsString()
    especialidad: string;

    @IsNotEmpty()
    @IsString()
    partido: string;

    @IsNotEmpty()
    @IsString()
    direccion: string

    @IsOptional()
    @IsString()
    observacion?: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    fechaDeCarga?: Date;

    @IsNumber()
    @IsNotEmpty()
    numeroAfiliado: number;

    @IsNotEmpty()
    @IsString()
    medico: string;

    @IsString()
    @IsOptional()
    estado?: string

}