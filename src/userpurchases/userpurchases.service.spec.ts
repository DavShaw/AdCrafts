import { Test, TestingModule } from '@nestjs/testing';
import { UserpurchasesService } from './userpurchases.service';

describe('UserpurchasesService', () => {
  let service: UserpurchasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserpurchasesService],
    }).compile();

    service = module.get<UserpurchasesService>(UserpurchasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
