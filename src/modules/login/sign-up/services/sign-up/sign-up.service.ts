import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import { User } from 'src/modules/shared/entities/user';
import { SignUpDto } from '../../requests/sign-up.request';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private connection: Connection,
  ) {}

  async createOne(newUser: SignUpDto): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const createUser = await this.createUser(newUser);
      const { password, ...resto } = await queryRunner.manager.save(createUser);
      return resto;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async createUser(newUser: SignUpDto): Promise<User> {
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    const id: string = uuid();
    const createUser = new User();
    createUser.email = newUser.email;
    createUser.password = hashPassword;
    createUser.createdDate = new Date();
    createUser.id = id;
    return createUser;
  }
}
