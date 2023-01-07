import { Controller, Get } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';

@Controller('currencies')
export class CurrenciesController {
  constructor(private service: CurrenciesService) {}

  @Get()
  getAll() {
    return this.service.getAllCurrencies();
  }
}
