import { Module } from '@nestjs/common';
import { RestoController } from './resto.controller';
import { RestoService } from './resto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestoSchema } from './schemas/resto.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Resto', schema: RestoSchema }])],
  controllers: [RestoController],
  providers: [RestoService]
})
export class RestoModule {}
