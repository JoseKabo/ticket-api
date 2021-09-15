import { Module } from '@nestjs/common';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [SignUpService],
  controllers: [SignUpController],
  exports: [SignUpService],
})
export class SignUpModule {}
