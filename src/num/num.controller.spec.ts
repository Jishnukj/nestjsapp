import { Test, TestingModule } from '@nestjs/testing';
import { NumController } from './num.controller';
import { NumService } from './num.service';

describe('NumController', () => {
  let controller: NumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumController],
      providers: [NumService],
    }).compile();

    controller = module.get<NumController>(NumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
