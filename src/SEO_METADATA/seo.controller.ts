import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('feature')
export class FeatureController {
  @Get('seo_metadata')
  titleAndH1(): string {
    return 'title and h1';
  }

  @Get('cat')
  handleCat(@Param('fish') cat: string) {
    return cat;
  }

  @Get('fishQ')
  handleFish(@Query() q: { name: string }) {
    return `The query was ${q.name}`;
  }
}
