import { Controller, Get, Query } from '@nestjs/common';
import { ComboService } from './combo.service';
import { QueryType } from 'src/types';

@Controller('combos')
export class ComboController {
  constructor(private readonly comboService: ComboService) { }
  
    @Get()
    public get(@Query() query: QueryType) {
      return this.comboService.get(query);
    }
}
