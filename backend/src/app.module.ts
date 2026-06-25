import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './api/product/product.module';
import { UserModule } from './api/user/user.module';
import { ComboModule } from './api/combo/combo.module';
import { PostModule } from './api/post/post.module';
import { ReviewModule } from './api/review/review.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './api/prisma/prisma.module';
import { CategoryModule } from './api/category/category.module';
import { FlowerModule } from 'src/api/flower/flower.module';
import { ColorModule } from './api/color/color.module';
import { EventModule } from './api/event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ProductModule,
    UserModule,
    ComboModule,
    PostModule,
    ReviewModule,
    CategoryModule,
    FlowerModule,
    ColorModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
