import { Test, TestingModule } from '@nestjs/testing';
import { SublocController } from './subloc.controller';
import { SublocService } from './subloc.service';

describe('SublocController', () => {
  let controller: SublocController;

  const mockSublocService = {
    create: jest.fn(dto => {
      return { id: 2, ...dto }
    }),

    update: jest.fn().mockImplementation((dto => {
      return dto;
    }))
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SublocController],
      providers: [SublocService],
    }).overrideProvider(SublocService).useValue(mockSublocService).compile();

    controller = module.get<SublocController>(SublocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('create a subloc', () => {
    const dto = { name: 'jishnu', locationId: 1 };
    expect(controller.create(dto)).toEqual(
      {
        id: expect.any(Number),
        name: 'jishnu',
        locationId: 1
      }
    );

    expect(mockSublocService.create).toHaveBeenCalledWith(dto); 
  });

  it('update a user',()=>{
    const updatedto ={
      id: 1,
      name: 'jishnu',
      locationId: 1
    }

    expect(controller.update(updatedto)).toEqual(updatedto);

    expect(mockSublocService.update).toHaveBeenCalledWith(updatedto); 

  });


});
