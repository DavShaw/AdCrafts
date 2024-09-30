import { Module } from '@nestjs/common';
import { UserpurchasesService } from './userpurchases.service';
import { UserpurchasesController } from './userpurchases.controller';

@Module({
  controllers: [UserpurchasesController],
  providers: [UserpurchasesService],
})
export class UserpurchasesModule {}
