import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Resto {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone_number: string;

    @Prop()
    owner_id: string;

    @Prop()
    location: string;
}

export const RestoSchema = SchemaFactory.createForClass(Resto)


