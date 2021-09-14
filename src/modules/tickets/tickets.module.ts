import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TicketsController } from './controllers/tickets/tickets.controller';
import { TicketsService } from './services/tickets/tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonMiddleware } from '../shared/common.middleware';

import { Ticket } from './entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService],
})
export class TicketsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CommonMiddleware)
      .forRoutes({ path: 'tickets', method: RequestMethod.GET });
  }
}
