import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Receta {
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
        required: true,
        trim: true
    })
    integrante: string;

    @Prop({
        required: true,
        trim: true
    })
    medicamento: string;

    @Prop({
        required: true
    })
    cantidad: number;

    @Prop({
        required: true,
        trim: true
    })
    presentacion: string;

    @Prop({
        trim: true,
        default: ''
    })
    observaciones: string;
}

export const RecetaSchema = SchemaFactory.createForClass(Receta);