import { Controller, Get } from '@nestjs/common';
import { TicketsService } from '../../application/tickets/tickets.service';
import { Ticket } from '../../domain/ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @Get()
  sayHello(): string {
    let ticketNames: Ticket[];
    this.ticketService.getAll().then((value) => {
      console.log(value);
      ticketNames = value;
    });
    return ticketNames[0].name;
  }
}
