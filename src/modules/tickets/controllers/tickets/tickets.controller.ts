import { Controller, Get, UseGuards } from '@nestjs/common';
import { TicketsService } from '../../services/tickets/tickets.service';
import { Ticket } from '../../entities/ticket.entity';
import { JwtAuthGuard } from 'src/modules/shared/guards/jwtauth.guard';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getTickets(): Promise<Ticket[]> {
    return this.ticketService.getAll();
  }
}
