import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './produto.repository';
import { UsersModule } from 'src/users/users.modulo';

@Module({
  imports: [UsersModule],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
