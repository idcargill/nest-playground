import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity.ts';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  findById(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('upload')
  addUser(@Body() payload: User) {
    return this.userService.addUser(payload);
  }

  @Get('drop/:id')
  dropUser(@Param('id') id: number) {
    return this.userService.dropUser(id);
  }

  @Get('all')
  allUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post('update')
  updateUser(@Body() payload: User) {
    return this.userService.updateUser(payload);
  }
}
