import { Injectable } from '@nestjs/common';

@Injectable()
export class SeoService {
  public handleCat(param: string) {
    return `Seo Service received param: ${param}`;
  }

  public handleFish(query: string) {
    return `Seo Service received query item: ${query}`;
  }
}
