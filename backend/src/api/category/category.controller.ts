import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { QueryType } from 'src/types';

@Controller('categories')
export class CategoryController {
  public constructor(private readonly categoryService: CategoryService) { }
  
  @Get()
  public get(@Query() query: QueryType) {
    return this.categoryService.get(query);
  }

  @Get(":id")
  public getById(@Param('id') id: string) {
    return this.categoryService.getById(id);
  }
}
