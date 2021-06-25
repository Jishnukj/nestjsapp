import { BadRequestException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateSublocDto } from './dto/create-subloc.dto';
import { UpdateSublocDto } from './dto/update-subloc.dto';
import { Subloc } from './entities/subloc.entity';

@Injectable()
export class SublocService {
  constructor(
    @Inject('SUBLOCATION_REPO')
    private sublocationrepo: Repository<Subloc>
  ) { }
  create(createSublocDto: CreateSublocDto) {
    const {name} = createSublocDto;
    if(!name){
      throw new BadRequestException('name is required');
    }
    return this.sublocationrepo.save(createSublocDto);
  }

  findAll() {
    return this.sublocationrepo.find({
      relations: ['locations']
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} subloc`;
  }

  update(id: number, updateSublocDto: UpdateSublocDto) {
    return `This action updates a #${id} subloc`;
  }

  remove(id: number) {
    return `This action removes a #${id} subloc`;
  }
}
