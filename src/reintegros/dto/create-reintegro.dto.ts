import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FacturaReintegro } from 'src/schemas/reintegro-factura.schema';

export class CreateReintegroDto {
    @IsString()
    @IsOptional()
    estado?: string;

    @IsNumber()
    @IsNotEmpty()
    numeroAfiliado: number;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    fechaDeCarga: Date;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    fechaDePrestacion: Date;

    @IsString()
    @IsNotEmpty()
    integrante: string;

    @IsString()
    @IsNotEmpty()
    medico: string;
    
    @IsString()
    @IsNotEmpty()
    especialidad: string;

    @IsString()
    @IsNotEmpty()
    lugarDeAtencion: string;

    @IsString()
    @IsOptional()
    observaciones?: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => FacturaReintegro)
    datosFactura: FacturaReintegro
}