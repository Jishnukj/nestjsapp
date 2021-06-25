import { Test, TestingModule } from '@nestjs/testing';
import { NumService } from './num.service';

describe('NumService', () => {
  let service: NumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumService],
    }).compile();

    service = module.get<NumService>(NumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
