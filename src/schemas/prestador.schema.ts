import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PrestadorDocument = Prestador & Document;

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
    @Prop({ required: true, unique: true })
    nombre: string;

    @Prop({ required: true })
    especialidad: string;

    @Prop({ required: true })
    tipo: string;

    // si querés mantener también un partido principal:
    @Prop()
    partido?: string;

    // Ahora es un array de objetos
    @Prop({
        type: [UbicacionSchema],
        required: true
    })
    ubicacion: Ubicacion[];

    @Prop({ required: true })
    telefono: number;
}

export const PrestadorSchema = SchemaFactory.createForClass(Prestador);
