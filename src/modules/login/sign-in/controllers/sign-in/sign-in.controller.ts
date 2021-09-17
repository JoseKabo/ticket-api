import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInDto } from '../../requests/signin.request';
import { SignInService } from '../../services/sign-in/sign-in.service';

@Controller('sign-in')
export class SignInController {

  constructor(private signInService: SignInService) {}
  
  @Post()
  async signIn(@Body() user: SignInDto) {
    const createdUser = await this.signInService.findOne(user);
    return createdUser;
  }
}
