import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { CreateFlowDto } from './dto/create-flow.dto';
import { UpdateFlowDto } from './dto/update-flow.dto';
import { Flow } from './schemas/flow.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class FlowService {

  constructor(
    @InjectModel(Flow.name)
    private flowModel: mongoose.Model<Flow>
    ){}

  // create(createFlowDto: CreateFlowDto) {
  //   return 'This action adds a new flow';
  // }
  async create(flow: Flow): Promise<Flow> { 
    const response = await this.flowModel.create(flow)
    return response
  }

  async findAll():Promise<Flow[]> {
    const response = await this.flowModel.find()
    return response
  }

  findByUUID(id: string) {
    const response = this.flowModel.findById(id)
    if(!response) throw new NotFoundException('Flow Not Found')
    return response;
  }

  update(id: number, updateFlowDto: UpdateFlowDto) {
    return `This action updates a #${id} flow`;
  }

  remove(id: number) {
    return `This action removes a #${id} flow`;
  }
}
