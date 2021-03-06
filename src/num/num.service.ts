import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNumDto } from './dto/create-num.dto';
import { UpdateNumDto } from './dto/update-num.dto';
import { Num } from './entities/num.entity';

@Injectable()
export class NumService {

  constructor(
    @InjectRepository(Num)
    private numRepo: Repository<Num>,
  ) {}
  create(createNumDto: CreateNumDto) {
    return this.numRepo.save(createNumDto);
  }

  async findAll() {
    return await this.numRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} num`;
  }

  update(id: number, updateNumDto: UpdateNumDto) {
    return `This action updates a #${id} num`;
  }

  remove(id: number) {
    return `This action removes a #${id} num`;
  }
}
