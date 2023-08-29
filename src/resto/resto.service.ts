import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Resto } from './schemas/resto.schema';

@Injectable()
export class RestoService {
    constructor(
        @InjectModel(Resto.name)
        private restoModel: mongoose.Model<Resto>
    ){}


    async findAll(): Promise<Resto[]> {
        const restos = await this.restoModel.find();
        return restos
    }

    async create(resto: Resto): Promise<Resto> {
        const response = await this.restoModel.create(resto)
        return response
    }

    async findById(id: string): Promise<Resto> {
        const resto = await this.restoModel.findById(id)
        if(!resto) throw new NotFoundException('Resto Not Found')
        return resto
    }

    async updateById(id: string, resto: Resto): Promise<Resto> {
        return await this.restoModel.findByIdAndUpdate(id, resto, {
            new: true,
            runValidators: true
        })
    }

    async deleteById(id: string): Promise<Resto> {
        return this.restoModel.findByIdAndDelete(id)
    }
}
