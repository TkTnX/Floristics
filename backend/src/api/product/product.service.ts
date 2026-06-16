import { Global, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { QueryType } from 'src/types';

@Injectable()
export class ProductService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async get(query: QueryType) {
    const { where, take, sortBy } = query;
    const products = await this.prismaService.product.findMany({
      where: {
        ...JSON.parse(where || '{}'),
      },
      take: take && take,
      orderBy: sortBy && JSON.parse(sortBy),
      include: {
        flowers: true,
      },
    });

    if (!products) throw new NotFoundException('Товары не найдены!');

    return products;
  }
}
