import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Autorizacion {
    @Prop({
        required: true,
        unique: true
    })
    numeroAutorizacion: string;

    @Prop({
        required: true,
        unique: true
    })
    numeroAfiliado: number;

    @Prop({
        required: true,
        unique: true
    })
    integrante: string;

    @Prop({ required: true })
    especialidad: string;

    @Prop({ required: true })
    fechaPrevista: Date;

    @Prop({ required: true })
    ubicacion: string;

    @Prop({
        required: true,
        trim: true,
        default: ''
    })
    observacion: string
}

export const AutorizacionSchema = SchemaFactory.createForClass(Autorizacion)