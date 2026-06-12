import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  public constructor(private readonly productService: ProductService) { }
  
  @Get()
  public get(query: string) {
    return this.productService.get(query);
  }
}
