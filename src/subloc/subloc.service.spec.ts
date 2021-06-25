import { BadGatewayException } from '@nestjs/common';
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

  it('throws exception when name is not provided', async()=>{
    expect.assertions(2);
    try{
      await service.create({name:'',locationsId:2})
    }catch(e){
      expect(e).toBeInstanceOf(BadGatewayException);
      expect(e.message).toBe('name is required');
    }
  });
});


