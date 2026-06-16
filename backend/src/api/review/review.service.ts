import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { QueryType } from 'src/types';

@Injectable()
export class ReviewService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async get(query: QueryType) {
    const { where, take, sortBy } = query;
    const reviews = await this.prismaService.review.findMany({
      where: where && JSON.parse(where),
      take: Number(take),
      orderBy: sortBy && JSON.parse(sortBy),
      include: {
        user: true,
      },
    });

    if (!reviews) throw new NotFoundException('Отзывы не найдены!');

    return reviews;
  }
}
