import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from 'src/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    public constructor(private readonly configService: ConfigService) {
        const adapter = new PrismaPg({
            user: configService.getOrThrow('DB_USER'),
            password: configService.getOrThrow('DB_PASSWORD'),
            host: configService.getOrThrow('DB_HOST'),
            port: configService.getOrThrow('DB_PORT'),
            database: configService.getOrThrow('DB_NAME'),
        })
        super({adapter})
    }
}
