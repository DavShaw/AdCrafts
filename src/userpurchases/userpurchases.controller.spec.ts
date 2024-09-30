import { Test, TestingModule } from '@nestjs/testing';
import { UserpurchasesController } from './userpurchases.controller';
import { UserpurchasesService } from './userpurchases.service';

describe('UserpurchasesController', () => {
  let controller: UserpurchasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserpurchasesController],
      providers: [UserpurchasesService],
    }).compile();

    controller = module.get<UserpurchasesController>(UserpurchasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
