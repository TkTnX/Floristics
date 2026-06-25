import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';

@Injectable()
export class EventService {
    public constructor(private readonly prismaService: PrismaService) { }
    
    public get() {
        const events = this.prismaService.event.findMany();
        if(!events) throw new NotFoundException('События не найдены!');
        return events;
    }
}
