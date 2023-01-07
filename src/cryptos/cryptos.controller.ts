import { Controller, Get } from '@nestjs/common';
import { CryptosService } from './cryptos.service';

@Controller('cryptos')
export class CryptosController {
  constructor(private service: CryptosService) {}

  @Get()
  getAll() {
    return this.service.getAllCryptos();
  }
}
