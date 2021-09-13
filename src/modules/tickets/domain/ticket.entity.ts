import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  ticketName: string;
  @Column()
  code: string;
  @Column()
  isExpired: boolean;
}