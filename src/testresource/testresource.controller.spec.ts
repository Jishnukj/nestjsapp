import { Test, TestingModule } from '@nestjs/testing';
import { TestresourceController } from './testresource.controller';
import { TestresourceService } from './testresource.service';

describe('TestresourceController', () => {
  let controller: TestresourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestresourceController],
      providers: [TestresourceService],
    }).compile();

    controller = module.get<TestresourceController>(TestresourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
