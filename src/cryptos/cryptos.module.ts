import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptosService } from './cryptos.service';
import { CryptosController } from './cryptos.controller';
import { Crypto } from './crypto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crypto])],
  providers: [CryptosService],
  controllers: [CryptosController],
})
export class CryptosModule {}
