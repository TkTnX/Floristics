import { Controller, Get } from '@nestjs/common';
import { ColorService } from './color.service';

@Controller('colors')
export class ColorController {
  public constructor(private readonly colorService: ColorService) {}

  @Get()
  public get() {
    return this.colorService.get()
  } 
}
