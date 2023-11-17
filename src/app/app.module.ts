import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeoModule } from 'src/SEO_METADATA/seo.module';
import { CustomConfig } from 'src/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/userModule/user.module';
import { User } from 'src/userModule/user.entity.ts';
import { DatabaseModule } from 'src/DatabaseModule/db.module';

const { baseUrl, port, user, password, dataBaseName } =
  CustomConfig.MySqlConfig();

@Module({
  imports: [
    SeoModule,
    UserModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: baseUrl,
      username: user,
      password: password,
      database: dataBaseName,
      port: port,
      entities: [User],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
