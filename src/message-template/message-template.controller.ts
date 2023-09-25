import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageTemplateService } from './message-template.service';
import { CreateMessageTemplateDto } from './dto/create-message-template.dto';
import { UpdateMessageTemplateDto } from './dto/update-message-template.dto';
import axios from 'axios';

@Controller('message-template')
export class MessageTemplateController {
  constructor(private readonly messageTemplateService: MessageTemplateService) {}

  @Post()
  async create(@Body() createMessageTemplateDto: CreateMessageTemplateDto) {

    let res

    let config = {
      headers: {
        'Authorization': process.env.FACEBOOK_AUTH_TOKEN,
        'Content-Type': 'application/json' 
      }
    }

    await axios.post('https://graph.facebook.com/v18.0/131314553397423/message_templates', createMessageTemplateDto, config)
    .then(response => { console.log(response.data); res=response.data})
    .catch(err => console.log("err",err.data))


    
    return this.messageTemplateService.create(res);
  }

  @Get()
  async findAll() {

    let config = {
      headers: {
        'Authorization': process.env.FACEBOOK_AUTH_TOKEN,
        'Content-Type': 'application/json' 
      }
    }

    const data = await axios.get('https://graph.facebook.com/v18.0/131314553397423/message_templates?limit=50', config)

    return this.messageTemplateService.findAll(data.data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageTemplateDto: UpdateMessageTemplateDto) {
    return this.messageTemplateService.update(+id, updateMessageTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageTemplateService.remove(+id);
  }
}
