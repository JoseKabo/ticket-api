import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'isExpired' })
  isExpired: boolean;

  @Column({ name: 'published' })
  published: Date;

  @Column({ name: 'contract_id' })
  contract_id: string;

  @Column({ name: 'validTo' })
  validTo: Date;
}