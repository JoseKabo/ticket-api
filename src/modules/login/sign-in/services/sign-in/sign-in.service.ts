import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { User } from '../../../../shared/entities/user';
import { SignInDto } from '../../requests/signin.request';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  
  async findOne(user: SignInDto): Promise<any> {
    try {
      const { password, ...resto } = await this.userRepository.findOne({
        email: user.email,
      });
      const isValid = await this.isValidPassword(user.password, password);
      return isValid ? await this.signIn(resto.id, resto.email) : [];
    } catch (error) {
      return [];
      console.log(`error`, error);
    }
  }

  // @param password: input password
  async isValidPassword(
    signInPassword: string,
    password: string,
  ): Promise<boolean> {
    return await bcrypt.compare(signInPassword, password);
  }

  async signIn(idUser: string, email: string) {
    const payload = { id: idUser, email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
