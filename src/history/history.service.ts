import { Get, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History) private historyRepository: Repository<History>,
  ) {}

  @Get('getAllHistory')
  async getAllHistory(@Query() query): Promise<any> {
    const { sort, pagination, currentPage, type, fromDate, toDate } = query;
    let sortName = sort;
    let orderBy = 'ASC';
    if (sortName.search('-') > -1) {
      orderBy = 'DESC';
      sortName = sortName.replace('-', '');
    }
    let where = {};
    if (type === 'live' || type === 'exchanged') {
      where = {
        ...where,
        type: Like(`%${type}%`),
      };
    }
    if (fromDate && toDate) {
      where = {
        ...where,
        date: Between(fromDate, toDate),
      };
    }
    const [result, total] = await this.historyRepository.findAndCount({
      order: {
        [sortName]: orderBy,
      },
      take: pagination || 10000,
      skip: currentPage ? currentPage * pagination : 0,
      where,
    });
    return { result, total };
  }

  async createHistory(body: History): Promise<History> {
    return this.historyRepository.save(body);
  }
}
