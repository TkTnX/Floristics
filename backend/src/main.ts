import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();
  app.setGlobalPrefix('api');

  app.use(cookieParser());
  app.enableCors({
    origin: config.getOrThrow('CLIENT_URL'),
    credentials: true,
  });
  await app.listen(config.getOrThrow('PORT') ?? 5000);
}
bootstrap();
