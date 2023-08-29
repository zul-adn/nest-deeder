import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import {RestoService } from './resto.service';
import { Resto } from './schemas/resto.schema';
import { CreateRestoDto } from './dto/create-resto.dto';
import { UpdateRestoDto } from './dto/update-resto.dto';

@Controller('restos')
export class RestoController {
    constructor(private bookService: RestoService){}

    @Get()
    async getAllRestos(): Promise<Resto[]>{
        return this.bookService.findAll()
    }

    @Post()
    async createResto(
        @Body()
        resto: CreateRestoDto
    ): Promise<Resto>{
        return this.bookService.create(resto)
    }

    @Get(':id')
    async getRestoById(
        @Param('id')
        id: string
    ): Promise<Resto>{
        return this.bookService.findById(id)
    }

    @Put(':id')
    async updateResto(
        @Param('id')
        id: string,
        @Body()
        resto: UpdateRestoDto
    ): Promise<Resto>{
        return this.bookService.updateById(id, resto)
    }

    @Delete(':id')
    async deleteRestoById(
        @Param('id')
        id: string
    ): Promise<Resto>{
        return this.bookService.deleteById(id)
    }
}
