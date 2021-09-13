import { Module } from '@nestjs/common';
import { TicketsController } from './infrastructure/tickets/tickets.controller';
import { TicketsService } from './application/tickets/tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './domain/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
