import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAfiliadoDto {

    @IsNumber()
    @IsNotEmpty()
    numeroAfiliado: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsDate()
    @Type(() => Date)
    @IsOptional()
    fechaNacimiento: Date;

    @IsString()
    @IsOptional()
    direccion?: string;

    @IsString()
    @IsNotEmpty()
    planMedico: string;

    @IsNumber()
    @IsNotEmpty()
    numeroDocumento: number;

    @IsString()
    @IsNotEmpty()
    tipoDocumento: string;

    @IsString()
    @IsNotEmpty()
    rol: string;

    @IsArray()
    @IsOptional()
    grupoFamiliar?: number[];

}
