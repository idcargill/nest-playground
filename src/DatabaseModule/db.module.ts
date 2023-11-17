import { Module } from '@nestjs/common';
import { DatabaseController } from './db.controller';
import { DatabaseService } from './db.service';
import { UserModule } from 'src/userModule/user.module';

@Module({
  imports: [UserModule],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
