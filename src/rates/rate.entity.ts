import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currencyFrom: string;

  @Column()
  currencyTo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  rate: number;
}
