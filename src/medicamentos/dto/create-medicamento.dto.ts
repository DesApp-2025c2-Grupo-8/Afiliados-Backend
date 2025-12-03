import { IsNotEmpty, IsNumber, IsString, IsArray } from 'class-validator';

export class CreateMedicamentoDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    cantidadMaxima: number;

    @IsArray()
    @IsNotEmpty()
    presentaciones: string[];

}