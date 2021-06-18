import { Injectable } from '@nestjs/common';
import { CreateTestresourceDto } from './dto/create-testresource.dto';
import { UpdateTestresourceDto } from './dto/update-testresource.dto';

@Injectable()
export class TestresourceService {
  create(createTestresourceDto: CreateTestresourceDto) {
    return 'This action adds a new testresource';
  }

  findAll() {
    return `This action returns all testresource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testresource`;
  }

  update(id: number, updateTestresourceDto: UpdateTestresourceDto) {
    return `This action updates a #${id} testresource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testresource`;
  }
}
