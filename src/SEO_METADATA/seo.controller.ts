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
    return this.seoService.handleParam(p);
  }

  @Get('query')
  handleQuery(@Query('name') name: string) {
    if (!name) {
      throw new HttpException(
        'Query must contain "name"',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.seoService.handleQuery(name);
  }

  @Get('forbidden')
  forbidden() {
    throw new HttpException('Forbidden Route', HttpStatus.FORBIDDEN);
  }

  @Get('env')
  handleEnv() {
    return this.seoService.handleEnvTest();
  }
}
