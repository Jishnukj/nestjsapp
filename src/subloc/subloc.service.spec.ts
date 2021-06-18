import { Test, TestingModule } from '@nestjs/testing';
import { SublocService } from './subloc.service';

describe('SublocService', () => {
  let service: SublocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SublocService],
    }).compile();

    service = module.get<SublocService>(SublocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
