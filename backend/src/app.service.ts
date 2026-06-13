import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client/extension';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
