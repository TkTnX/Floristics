import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';

@Injectable()
export class FlowerService {
    public constructor(private readonly prismaService: PrismaService) { }
    
    public async get() {
        const flowers = await this.prismaService.flower.findMany()
        if(!flowers )throw new NotFoundException('Цветы не найдены!') 
            return flowers
    }
}
