import { Get, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History) private historyRepository: Repository<History>,
  ) {}

  @Get('getAllHistory')
  async getAllHistory(@Query() query): Promise<any> {
    const { sort, pagination, currentPage } = query;
    let sortName = sort;
    let orderBy = 'ASC';
    if (sortName.search('-') > -1) {
      orderBy = 'DESC';
      sortName = sortName.replace('-', '');
    }
    const [result, total] = await this.historyRepository.findAndCount({
      order: {
        [sortName]: orderBy,
      },
      take: pagination || 10000,
      skip: currentPage ? currentPage * pagination : 0,
    });
    return { result, total };
  }

  async createHistory(body: History): Promise<History> {
    return this.historyRepository.save(body);
  }
}
