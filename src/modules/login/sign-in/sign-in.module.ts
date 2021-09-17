import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in/sign-in.controller';
import { SignInService } from './services/sign-in/sign-in.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/shared/entities/user';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/modules/shared/auth/secretKey.auth';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [SignInController],
  providers: [SignInService],
  exports: [SignInService],
})
export class SignInModule {}
