import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Owner {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    email: string;

    @Prop()
    phone_number: string;

    @Prop()
    status: string;

    @Prop()
    password: string;
}

export const TableSchema = SchemaFactory.createForClass(Owner)


