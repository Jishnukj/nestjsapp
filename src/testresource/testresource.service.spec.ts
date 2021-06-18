import { Test, TestingModule } from '@nestjs/testing';
import { TestresourceService } from './testresource.service';

describe('TestresourceService', () => {
  let service: TestresourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestresourceService],
    }).compile();

    service = module.get<TestresourceService>(TestresourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
