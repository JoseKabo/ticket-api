import { Column, Entity, FindRelationsNotFoundError, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  isExpired: boolean;
  @Column()
  published: Date;
  @Column()
  contract_id: string;
  @Column()
  validTo: Date;
}