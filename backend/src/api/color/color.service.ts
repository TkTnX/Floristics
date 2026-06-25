import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';

@Injectable()
export class ColorService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async get() {
    const colors = await this.prismaService.color.findMany();
    if (!colors) throw new NotFoundException('Цвета не найдены!');
    return colors;
  }
}
