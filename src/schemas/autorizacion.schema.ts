import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type AutorizacionDocument = Autorizacion & Document;

@Schema()
export class Autorizacion {
    @Prop({
        required: true,
        unique: true
    })
    numeroAutorizacion: number;

    @Prop({
        required: true,
    })
    numeroAfiliado: number;

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

    @Prop({ required: true, trim: true })
    especialidad: string;

    @Prop({ required: false })
    fechaDeCarga: Date;

    @Prop({ required: true })
    partido?: string;

    @Prop({ required: true })
    direccion: string

    @Prop({
        trim: true,
        default: ''
    })
    observaciones: string

    @Prop({
        trim: true,
        default: 'pendiente'
    })
    estado: string

    @Prop({ required: false})
    cantDias: number

}

export const AutorizacionSchema = SchemaFactory.createForClass(Autorizacion)