import { Module } from '@nestjs/common';
import { ProviderService } from './providers.service';
import { ProvidersController } from './providers.controller';

@Module({
  controllers: [ProvidersController],
  providers: [ProviderService],
})
export class ProvidersModule {}
