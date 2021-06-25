import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Num } from './entities/num.entity';
import { NumService } from './num.service';

describe('NumService', () => {
  let service: NumService;

  const mockNumRepo = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest.fn().mockImplementation(dto => Promise.resolve({ id: Date.now(), ...dto })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumService,
        {
          provide: getRepositoryToken(Num),
          useValue: mockNumRepo
        }
      ],
    }).compile();

    service = module.get<NumService>(NumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should create a new num', async () => {
    const data = { name: 'jishnu' }
    expect(await service.create(data)).toEqual({ id: expect.any(Number), ...data })
  })
});
