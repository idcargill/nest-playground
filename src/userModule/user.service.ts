import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity.ts.js';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}
  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async addUser(payload: { name: string; description?: string }) {
    const newUser = this.usersRepository.create(payload);
    return await this.usersRepository.insert(newUser);
  }

  public dropUser(id: number) {
    try {
      return this.usersRepository.delete({ id });
    } catch (e: any) {
      console.log(`ERROR DELETING: ${e}`);
    }
  }

  public getAllUsers() {
    return this.usersRepository.find();
  }

  public updateUser(payload: User) {
    return this.usersRepository.update(payload.id, payload);
  }
}
