import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Flow {
    @Prop()
    uuid: string;

    @Prop()
    organization_uuid: string;

    @Prop()
    flow: string;
}

export const FlowSchema = SchemaFactory.createForClass(Flow)


