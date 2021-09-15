import { Module } from '@nestjs/common';
import { ForgotPassword } from './controllers/forgot-password.controller';
import { ForgotPasswordService } from './services/forgot-password/forgot-password.service';

@Module({
  controllers: [ForgotPassword],
  providers: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
