import { Global, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { ProductWhereInput } from 'src/generated/prisma/models';
import { QueryType } from 'src/types';

@Injectable()
export class ProductService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async get(query: QueryType) {
    const { where: queryWhere, take, sortBy, page, query: filters } = query;
    const jsonFilters = JSON.parse(filters || '{}');

    const filtersObject = Object.keys(jsonFilters).reduce(
      (acc, key) => ({
        ...acc,
        [key]: {
          some: {
            id: {
              in: jsonFilters[key]
                ?.split(',')
                .map((item: string) => item.split('-')[0]),
            },
          },
        },
      }),
      {},
    );

    let where: ProductWhereInput = {
      ...JSON.parse(queryWhere || '{}'),
      ...filtersObject,
    };
    const products = await this.prismaService.product.findMany({
      where,
      take: take && Number(take),
      skip: page && (Number(page) - 1) * Number(take),
      orderBy: sortBy && JSON.parse(sortBy),
      include: {
        flowers: true,
      },
    });

    const total = await this.prismaService.product.count({
      where,
    });

    if (!products) throw new NotFoundException('Товары не найдены!');

    return { products, totalPages: Math.ceil(total / Number(take)) || 1 };
  }
}
