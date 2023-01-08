import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { Rate } from './rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rate])],
  providers: [RatesService],
  controllers: [RatesController],
})
export class RatesModule {}
