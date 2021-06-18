import { Test, TestingModule } from '@nestjs/testing';
import { SublocController } from './subloc.controller';
import { SublocService } from './subloc.service';

describe('SublocController', () => {
  let controller: SublocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SublocController],
      providers: [SublocService],
    }).compile();

    controller = module.get<SublocController>(SublocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
