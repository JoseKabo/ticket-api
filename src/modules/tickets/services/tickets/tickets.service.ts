import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../../entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  async getAll(): Promise<Ticket[]> {
    try {
      const tickets = await this.ticketRepository.find();
      return tickets;
    } catch (error) {
      // throw new HttpException({
      //   error: 'Error',
      // }, HttpStatus.FORBIDDEN);
    }
  }
}
