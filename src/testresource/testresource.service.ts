import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestresourceDto } from './dto/create-testresource.dto';
import { CustomDto } from './dto/custom.dto';
import { UpdateTestresourceDto } from './dto/update-testresource.dto';
import { Testresource } from './entities/testresource.entity';

@Injectable()
export class TestresourceService {
  constructor(
    @InjectRepository(Testresource)
    private testrepo: Repository<Testresource>,
  ) {}

  async create(createTestresourceDto: CreateTestresourceDto) {
    return await this.testrepo.save(createTestresourceDto);
  }

  async findAll() {
    return await this.testrepo.find();
  }

  async findOne(id: number) {
    return await this.testrepo.findOne(id);
  }

  async findByName(name: string){
    let data = await this.testrepo.findOne({'name': name});
    return <CustomDto>{
      name:data.name,
      des:data.description,
      uniqueid:data.id
    }
    //return result;
  }

  async update(id: number, updateTestresourceDto: UpdateTestresourceDto) {
    let data=await this.testrepo.findOne(id);
    data.name=updateTestresourceDto.name;
    data.description=updateTestresourceDto.description;
    data.domain=updateTestresourceDto.domain;
    return await this.testrepo.save(data);
  }

  remove(id: number) {
    return `This action removes a #${id} testresource`;
  }
}
