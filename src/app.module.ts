import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptosModule } from './cryptos/cryptos.module';
import { Crypto } from './cryptos/crypto.entity';
import { CurrenciesModule } from './currencies/currencies.module';
import { Currency } from './currencies/currency.entity';
import { Rate } from './rates/rate.entity';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'admin',
      password: '1234',
      database: 'widget',
      entities: [Crypto, Currency, Rate],
      synchronize: true,
    }),
    CryptosModule,
    CurrenciesModule,
    RatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
