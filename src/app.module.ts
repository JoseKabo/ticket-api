import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ormConfig } from './config/orm.config';
import { RoutesModule } from './routes.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['dev.env'],
    }),
    TypeOrmModule.forRoot(ormConfig.getTypeOrmConfig()),
    RoutesModule,
    LoginModule,
  ],
})
export class AppModule {}
