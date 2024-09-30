import { Module } from '@nestjs/common';
import { UsersettingsService } from './usersettings.service';
import { UsersettingsController } from './usersettings.controller';

@Module({
  controllers: [UsersettingsController],
  providers: [UsersettingsService],
})
export class UsersettingsModule {}
