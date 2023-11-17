import { Injectable } from '@nestjs/common';
import { getSeoServiceConfig } from 'src/config';
@Injectable()
export class SeoService {
  public handleParam(param: string) {
    return `Seo Service received param: ${param}`;
  }

  public handleQuery(query: string) {
    return `Seo Service received query item: ${query}`;
  }

  public handleEnvTest() {
    const { test } = getSeoServiceConfig();
    return `Env Variable: ${test}`;
  }
}
