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
    name: string;

    @Prop()
    flow: string;

    @Prop()
    nodes: string;

    @Prop()
    edges: string;
}

export const FlowSchema = SchemaFactory.createForClass(Flow)


