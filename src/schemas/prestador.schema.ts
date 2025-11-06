import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
export class Ubicacion {
    @Prop({ required: true })
    partido: string;

    @Prop({ required: true })
    direccion: string;
}

const UbicacionSchema = SchemaFactory.createForClass(Ubicacion);

@Schema()
export class Prestador {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    especialidad: string;

    @Prop({ required: true })
    tipo: string;

    @Prop({
        type: [UbicacionSchema],
        required: true
    })
    ubicacion: Ubicacion[];

    @Prop({ required: true })
    telefono: number;
}

export const PrestadorSchema = SchemaFactory.createForClass(Prestador);
