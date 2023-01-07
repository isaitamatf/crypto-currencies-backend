import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptosModule } from './cryptos/cryptos.module';
import { Crypto } from './cryptos/crypto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'admin',
      password: '1234',
      database: 'widget',
      entities: [Crypto],
      synchronize: true,
    }),
    CryptosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
