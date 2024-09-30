import { Test, TestingModule } from '@nestjs/testing';
import { UsersettingsController } from './usersettings.controller';
import { UsersettingsService } from './usersettings.service';

describe('UsersettingsController', () => {
  let controller: UsersettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersettingsController],
      providers: [UsersettingsService],
    }).compile();

    controller = module.get<UsersettingsController>(UsersettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
