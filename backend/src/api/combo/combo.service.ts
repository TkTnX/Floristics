import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { QueryType } from 'src/types';

@Injectable()
export class ComboService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async get(query: QueryType) {
    const { where, take, sortBy } = query;
    const combos = await this.prismaService.combo.findMany({
      where: where && JSON.parse(where),
      take: Number(take),
      orderBy: sortBy && JSON.parse(sortBy),
      include: {
        products: true,
      },
    });

    if (!combos) throw new NotFoundException('Комбо не найдены!');

    return combos;
  }
}
