import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crypto } from './crypto.entity';

@Injectable()
export class CryptosService {
  constructor(
    @InjectRepository(Crypto) private cryptosRepository: Repository<Crypto>,
  ) {}

  async getAllCryptos(): Promise<Crypto[]> {
    return await this.cryptosRepository.find();
  }
}
