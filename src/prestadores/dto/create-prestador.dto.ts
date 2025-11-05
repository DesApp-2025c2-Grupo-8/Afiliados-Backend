import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

class UbicacionDto {
    @IsString()
    @IsNotEmpty()
    partido: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;
}

export class CreatePrestadorDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    especialidad: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    // opcional si querés mantener un partido principal
    @IsString()
    partido?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UbicacionDto)
    ubicacion: UbicacionDto[];

    @IsNumber()
    @IsNotEmpty()
    telefono: number;
}
