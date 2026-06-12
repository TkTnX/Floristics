import { Global, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';

@Injectable()
export class ProductService {
  public constructor(private readonly prismaService: PrismaService) {}

    public async get(query: string) {
      console.log(query)
    const products = await this.prismaService.product.findMany({});

    if (!products) throw new NotFoundException('Товары не найдены!');

    return products;
  }
}
