import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { SignUpDto } from '../../requests/sign-up.request';

@Controller('sign-up')
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @Post()
  async signUp(@Body() newUser: SignUpDto) {
    const createdUser = await this.signUpService.createOne(newUser);
    console.log('createdUser :>> ', createdUser);
  }
}
