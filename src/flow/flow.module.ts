import { Module } from '@nestjs/common';
import { FlowService } from './flow.service';
import { FlowController } from './flow.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FlowSchema } from './schemas/flow.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Flow', schema: FlowSchema }])],
  controllers: [FlowController],
  providers: [FlowService],
  exports: [FlowService]
})

export class FlowModule {}
