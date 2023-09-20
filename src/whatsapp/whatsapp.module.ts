import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { WhatsappController } from './whatsapp.controller';
import { FlowModule } from 'src/flow/flow.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register(), FlowModule],
  controllers: [WhatsappController],
  providers: [WhatsappService],
})
export class WhatsappModule {}
