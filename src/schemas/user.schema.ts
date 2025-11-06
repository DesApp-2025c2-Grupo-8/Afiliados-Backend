import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class User {
    @Prop({ required: true })
    numeroAfiliado: number;

    @Prop({ required: true})
    nombre: string;

    @Prop({ required: true})
    apellido: string;

    @Prop({ required: true})
    email: string;

    @Prop({ required: true})
    password: string;

    @Prop({ required: true })
    fechaNacimiento: Date;

    @Prop({ required: false })
    telefono: string;

    @Prop({ required: false })
    direccion: string;

    @Prop({ required: true })
    planMedico: string;

    @Prop({ required: true })
    tipoDocumento: string;

    @Prop({ required: true })
    numeroDocumento: number;

    @Prop({ required: true })
    rol: string;

    @Prop({ type: [Number], default: [] })
    grupoFamiliar: number[];
    
}

export const UserSchema = SchemaFactory.createForClass(User);
