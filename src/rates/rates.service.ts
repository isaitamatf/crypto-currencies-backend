import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rate } from './rate.entity';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(Rate) private ratesRepository: Repository<Rate>,
  ) {}

  async getAllRates(): Promise<Rate[]> {
    return await this.ratesRepository.find();
  }
}
