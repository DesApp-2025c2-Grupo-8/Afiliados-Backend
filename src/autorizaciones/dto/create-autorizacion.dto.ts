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
    ubicacion: object;

    @IsOptional()
    @IsString()
    observacion?: string;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    fechaPrevista?: Date;

    @IsNumber()
    @IsNotEmpty()
    numeroAfiliado: number;

    @IsNotEmpty()
    @IsString()
    medico: string;

}