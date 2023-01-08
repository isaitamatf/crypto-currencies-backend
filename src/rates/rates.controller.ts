import { Controller, Get } from '@nestjs/common';
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private service: RatesService) {}

  @Get()
  getAll() {
    return this.service.getAllRates();
  }
}
