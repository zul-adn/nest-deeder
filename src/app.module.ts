import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestoModule } from './resto/resto.module';
import { TableModule } from './table/table.module';
import { OwnerModule } from './owner/owner.module';
import { MenuModule } from './menu/menu.module';
import { AllergyModule } from './allergy/allergy.module';
import { FlowModule } from './flow/flow.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), 
  MongooseModule.forRoot(process.env.DB_STRING),
  RestoModule,
  TableModule,
  OwnerModule,
  MenuModule,
  AllergyModule,
  FlowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
