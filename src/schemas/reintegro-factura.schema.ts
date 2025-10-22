import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FacturaReintegro {
    @Prop({ 
        required: true 
    })
    cuit: number;

    @Prop({ 
        required: true 
    })
    fechaDeFactura: string;

    @Prop({ 
        required: true 
    })
    monto: number;

    @Prop({ 
        required: true 
    })
    personaFacturada: string;

    @Prop({ 
        required: true 
    })
    medioDePago: string;

    @Prop()
    cbu?: number;
    
}

export const FacturaReintegroSchema = SchemaFactory.createForClass(FacturaReintegro)