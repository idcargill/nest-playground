import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SeoService } from './seo.service';
import { SeoController } from './seo.controller';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
  controllers: [SeoController],
  providers: [SeoService],
})
export class SeoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SeoController);
  }
}
