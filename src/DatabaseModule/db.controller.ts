import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DatabaseService } from './db.service';

@Controller()
export class DatabaseController {
  constructor(private db: DatabaseService) {}

  @Get('db/:id')
  findById(@Param('id') id: number) {
    return this.db.getById(id);
  }

  @Post('db/upload')
  addUser(@Body() payload: { name: string; description?: string }) {
    return this.db.insertUser(payload);
  }
}
