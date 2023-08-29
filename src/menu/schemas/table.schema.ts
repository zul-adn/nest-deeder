import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Menu {
    @Prop()
    name: string;

    @Prop()
    categories: string;

    @Prop()
    ingredients: string;

    @Prop()
    allergies: string;

    @Prop()
    adons: string;

    @Prop()
    cooking_time: string;

    @Prop()
    resto_id: string;
}

export const TableSchema = SchemaFactory.createForClass(Menu)


