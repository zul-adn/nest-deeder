import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { FlowService } from 'src/flow/flow.service';

@Controller('whatsapp')
export class WhatsappController {
  @Inject(FlowService)
  private readonly flowService: FlowService;
  
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post()
  create(@Body() body: CreateWhatsappDto) {
    return this.whatsappService.create(body);
  }

  @Post('/sendwa')
  sended(@Body() body: any){
    return this.whatsappService.send(body)
  }

  @Get()
  findAll() {
    return this.whatsappService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const flow = this.whatsappService.findOne(id)
    return flow;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappDto: UpdateWhatsappDto) {
    return this.whatsappService.update(+id, updateWhatsappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappService.remove(+id);
  }
}
