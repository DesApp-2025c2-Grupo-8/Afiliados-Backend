import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { FacturaReintegro, FacturaReintegroSchema } from './reintegro-factura.schema';

@Schema()
export class Reintegro {
    @Prop({
        default: 'Pendiente'
    })
    estado: string;

    @Prop({
         required: true,
         unique: true
    })
    numeroOrden: number;

    @Prop({
         required: true,
    })
    numeroAfiliado: number;

    @Prop({
        required: true
    })
    fechaDeCarga: Date;

    @Prop({
        required: true
    })
    fechaDePrestacion: Date;

    @Prop({
        required: true,
        trim: true
    })
    integrante: string;

    @Prop({
        required: true,
        trim: true
    })
    medico: string;

    @Prop({
        required: true,
        trim: true
    })
    especialidad: string;

    @Prop({
        required: true,
        trim: true
    })
    lugarDeAtencion: string;

    @Prop({
        trim: true,
        default: ''
    })
    observaciones: string;

    @Prop({
        type: FacturaReintegroSchema,
        required: true
    })
    @Type(() => FacturaReintegro)
    datosFactura: FacturaReintegro;
}

export const ReintegroSchema = SchemaFactory.createForClass(Reintegro);