import { BadGatewayException, BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Locations } from 'src/location/entities/location.entity';
import { Subloc } from './entities/subloc.entity';
import { SublocService } from './subloc.service';

describe('SublocService', () => {
  let service: SublocService;

  const mockSublocRepo = {

  }

  const mockLoc = {

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SublocService, {
        provide: getRepositoryToken(Subloc),
        useValue: mockSublocRepo
      }],
      imports:[Locations]
    }).compile();

    service = module.get<SublocService>(SublocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // feel there is an error

  // it('throws exception when name is not provided', async()=>{
  //  // expect.assertions(2);
  //   try{
  //     await service.create({name:'',locationsId:2})
  //   }catch(e){
  //     expect(e).toBeInstanceOf(BadRequestException);
  //     expect(e.message).toBe('name is required');
  //   }
  // });
});


