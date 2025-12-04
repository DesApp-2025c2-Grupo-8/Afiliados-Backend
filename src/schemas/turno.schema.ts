import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ubicacion{
    @Prop({ required: true })
    partido: string

    @Prop( { required: true })
    direccion: string
}

const UbicacionSchema = SchemaFactory.createForClass(Ubicacion)

@Schema({ timestamps: true})
export class Turno extends Document {
    @Prop({ required: true })
    numeroAfiliado: number;

    @Prop()
    numeroOrden: number

    @Prop({ required: true })
    integrante: string;

    @Prop({ required: true })
    especialidad: string;

    @Prop()
    medico?: string;

    @Prop({ type: [UbicacionSchema] })
    lugarDeAtencion?: Ubicacion[];

    @Prop({ required: true })
    fecha: string;

    @Prop({ required: true })
    hora: string;

    @Prop({ required: true, default: false }) 
    estaCancelado: boolean;
}

export const TurnoSchema = SchemaFactory.createForClass(Turno)
export type TurnoDocument = Turno & Document