import { Ticket } from './domain/ticket.entity';
import { Module } from '@nestjs/common';
import { TicketsController } from './infrastructure/tickets/tickets.controller';
import { TicketsService } from './application/tickets/tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService],
})
export class TicketsModule {}
