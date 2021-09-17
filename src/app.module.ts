import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ormConfig } from './config/orm.config';
import { RoutesModule } from './routes.module';
import { LoginModule } from './modules/login/login.module';
import { JwtStrategy } from './modules/shared/auth/jwtStrategy.auth';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './modules/shared/auth/secretKey.auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['dev.env'],
    }),
    TypeOrmModule.forRoot(ormConfig.getTypeOrmConfig()),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
    RoutesModule,
    LoginModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
