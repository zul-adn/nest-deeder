import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//DB_STRING = mongodb+srv://dev:izFImrb4k1xk7USV@restoapp-dev.5cpcgpv.mongodb.net/?retryWrites=true&w=majority
//"start_dev: "node dist/main",