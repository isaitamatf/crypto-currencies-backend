import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';

@Controller('history')
export class HistoryController {
  constructor(private service: HistoryService) {}

  @Get()
  getAllBySort(@Query() query) {
    return this.service.getAllHistory(query);
  }

  @Post()
  create(@Body() body: History): Promise<History> {
    return this.service.createHistory(body);
  }
}
