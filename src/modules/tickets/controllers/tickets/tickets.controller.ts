import { Controller, Get } from '@nestjs/common';
import { TicketsService } from '../../services/tickets/tickets.service';
import { Ticket } from '../../entities/ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @Get()
  async getTickets(): Promise<Ticket[]> {
    return this.ticketService.getAll();
  }
}
