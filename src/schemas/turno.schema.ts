import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Turno extends Document {
    @Prop({ required: true })
    numeroAfiliado: number;

    @Prop({ required: true, unique: true, index: true })
    numeroOrden: number

    @Prop({ required: true })
    integrante: string;

    @Prop({ required: true })
    especialidad: string;

    @Prop()
    medico?: string;

    @Prop()
    lugarDeAtencion?: string;

    @Prop({ required: true })
    fecha: string;

    @Prop({ required: true })
    hora: string;
}

export const TurnoSchema = SchemaFactory.createForClass(Turno)