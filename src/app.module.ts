import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { UsersModule } from './modules/users/users.module';
import { ormConfig } from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['dev.env'],
    }),
    TypeOrmModule.forRoot(ormConfig.getTypeOrmConfig()),
    TicketsModule,
    UsersModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
    console.log('USER >>>>', process.env.POSTGRES_USER);
  }
}
