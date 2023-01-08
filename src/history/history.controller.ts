import { Body, Controller, Get, Post } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';

@Controller('history')
export class HistoryController {
  constructor(private service: HistoryService) {}

  @Get()
  getAll() {
    return this.service.getAllHistory();
  }

  @Post()
  create(@Body() body: History): Promise<History> {
    return this.service.createHistory(body);
  }
}
