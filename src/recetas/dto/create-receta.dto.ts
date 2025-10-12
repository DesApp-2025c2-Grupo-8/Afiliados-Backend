import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRecetaDto {
    @IsNumber()
    @IsNotEmpty()
    orden: number;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    fechaDeCarga: Date;

    @IsString()
    @IsNotEmpty()
    integrante: string;

    @IsString()
    @IsNotEmpty()
    medicamento: string;

    @IsNumber()
    @IsNotEmpty()
    cantidad: number;

    @IsString()
    @IsNotEmpty()
    presentacion: string;

    @IsString()
    @IsOptional()
    observaciones?: string;
}