import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.modulo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigServe } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    UsersModule,
    ProdutoModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigServe,
      inject: [PostgresConfigServe]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
