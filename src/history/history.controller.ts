import { Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private service: HistoryService) {}

  @Get()
  getAll() {
    return this.service.getAllHistory();
  }
}