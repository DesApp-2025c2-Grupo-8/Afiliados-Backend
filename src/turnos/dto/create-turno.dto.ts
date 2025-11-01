import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateTurnoDto{
    @IsNumber()
    @IsNotEmpty()
    numeroAfiliado: number;

    @IsString()
    @IsNotEmpty()
    integrante: string;

    @IsString()
    @IsNotEmpty()
    especialidad: string;

    @IsString()
    @IsOptional()
    medico?: string;

    @IsString()
    @IsOptional()
    lugarDeAtencion?: string;

    @IsString()
    @IsNotEmpty()
    fecha: string;

    @IsString()
    @IsNotEmpty()
    hora: string;
}