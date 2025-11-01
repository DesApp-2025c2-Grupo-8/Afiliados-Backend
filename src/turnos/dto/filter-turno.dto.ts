import { IsOptional, IsString, IsNumber } from "class-validator";

export class FilterTurnoDto{
    @IsOptional()
    @IsNumber()
    numeroAfiliado?: number;

    @IsOptional()
    @IsString()
    especialidad?: string;

    @IsOptional()
    @IsString()
    medico?: string;

    @IsOptional()
    @IsString()
    fecha?: string;

}