import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Medicamento {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    cantidadMaxima: number;

    @Prop({ type: [String], default: [] })
    presentaciones: string[];

}

export const MedicamentoSchema = SchemaFactory.createForClass(Medicamento);
