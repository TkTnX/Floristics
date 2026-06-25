import { Controller, Get } from '@nestjs/common';
import { FlowerService } from './flower.service';

@Controller('flowers')
export class FlowerController {
  public constructor(private readonly flowerService: FlowerService) { }
  
  @Get()
  public get() {
    return this.flowerService.get();
  }
}
