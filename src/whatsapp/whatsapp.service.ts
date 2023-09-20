import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { FlowService } from 'src/flow/flow.service';

import { Cache } from 'cache-manager';
const { getInitialMessage, sendWhatsApp, getResponseMessage } = require('./helper/whtasapp')

@Injectable()
export class WhatsappService {

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache){}

  @Inject(FlowService)
  private readonly flowService : FlowService

  async create(body: any) {
    const getData: any = await this.cacheManager.get('activeConv')
    console.log(getData)
    console.log(body)
    this.flowService.findByUUID(getData?._id)
    .then(async (res) => {
      
      const msg = await getResponseMessage(res.flow, body?.Body)
      await sendWhatsApp(msg, body.From, body.To)
    })
    .catch(err => console.log(err))
    return getData;
  }

  async send(body: any) {
    this.flowService.findByUUID(body.flowId)
    .then(async (res) => {
      await this.cacheManager.set('activeConv', res, 2400000);
      const msg = await getInitialMessage(res.flow)
      await sendWhatsApp(msg, `whatsapp:${body.senderId}`, 'whatsapp:+14155238886')
    })
    .catch(err => console.log(err))
    return body;
  }

  findAll() {
    return `This action returns all whatsapp`;
  }

  findOne(id: string) {
    this.flowService.findByUUID(id)
    .then(async (res) => {
      await this.cacheManager.set('activeConv', res, 10000);
      const msg = await getInitialMessage(res.flow)
      // await sendWhatsApp(msg)
    })
    .catch(err => console.log(err))
   return
  }

  update(id: number, updateWhatsappDto: UpdateWhatsappDto) {
    return `This action updates a #${id} whatsapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsapp`;
  }
}
