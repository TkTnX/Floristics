import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { QueryType } from 'src/types';

@Controller('categories')
export class CategoryController {
  public constructor(private readonly categoryService: CategoryService) { }
  
  @Get()
  public get(@Query() query: QueryType) {
    return this.categoryService.get(query);
  }
}
