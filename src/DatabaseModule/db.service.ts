import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../userModule/user.entity.ts';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(User)
    private user: Repository<User>,
  ) {}

  public getById(id: number) {
    try {
      return this.user.findOneBy({ id });
    } catch (e) {
      throw new HttpException(
        'Failed to find ID or something',
        HttpStatus.NO_CONTENT,
      );
    }
  }

  public async insertUser(payload: any) {
    const newUser = this.user.create(payload);
    console.log(newUser);
    // const rep = this.user.manager.getRepository(User);

    return await this.user.insert(payload);
    // return rep.save(newUser);
    // try {
    //   return this.user.save(payload);
    // } catch (e: any) {
    //   console.log(`ERROR Saving: ${e}`);
    // }
  }
}
