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
  async create(createSublocDto: CreateSublocDto) {
    const { name } = createSublocDto;
    if (!name) {
      throw new BadRequestException('name is required');
    }
    return await this.sublocationrepo.save(createSublocDto);
  }

  findAll() {
    return this.sublocationrepo.find({
      relations: ['locations']
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} subloc`;
  }

  async update(loc: UpdateSublocDto) {
    let subloc = await this.sublocationrepo.findOne(loc.id);
    subloc.name = loc.name;
    subloc.locationId = loc.locationId;
    return await this.sublocationrepo.save(loc);
  }

  remove(id: number) {
    return `This action removes a #${id} subloc`;
  }
}
