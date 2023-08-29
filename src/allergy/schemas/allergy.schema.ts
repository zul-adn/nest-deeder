import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Table {
    @Prop()
    table_name: string;

    @Prop()
    capacity: string;

    @Prop()
    resto_id: string;
}

export const TableSchema = SchemaFactory.createForClass(Table)


