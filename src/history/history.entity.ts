import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  currencyFrom: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount1: number;

  @Column()
  currencyTo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount2: number;

  @Column()
  type: string;
}
