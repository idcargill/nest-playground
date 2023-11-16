import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { SeoService } from './seo.service';

@Controller('feature')
export class SeoController {
  constructor(private seoService: SeoService) {}

  @Get('seo_metadata')
  titleAndH1() {
    return { title: 'title here', h1: 'h1 here' };
  }

  @Get('param/:p')
  handleParam(@Param('p') p: string) {
    return this.seoService.handleCat(p);
  }

  @Get('query')
  handleFish(@Query('name') name: string) {
    return this.seoService.handleFish(name);
  }

  @Get('forbidden')
  forbidden() {
    throw new HttpException('Forbidden Route', HttpStatus.FORBIDDEN);
  }
}
