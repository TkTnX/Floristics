import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { QueryType } from 'src/types';

@Controller('products')
export class ProductController {
  public constructor(private readonly productService: ProductService) {}

  @Get()
  public get(@Query() query: QueryType) {
    return this.productService.get(query);
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return this.productService.getById(id);
  }
}
