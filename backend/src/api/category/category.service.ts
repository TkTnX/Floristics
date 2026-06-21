import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { QueryType } from 'src/types';

@Injectable()
export class CategoryService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async get(query: QueryType) {
    const { where, take, sortBy } = query;
    const categories = await this.prismaService.category.findMany({
      where: where && JSON.parse(where),
      take: take && Number(take),
      orderBy: sortBy && JSON.parse(sortBy),
      include: {
        _count: { select: { products: true } },
      },
    });

    if (!categories) throw new NotFoundException('Категории не найдены!');

    return categories;
  }
}
