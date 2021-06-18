import { Inject, Injectable } from '@nestjs/common';
import { Locations } from 'src/location/entities/location.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPO')
    private userrepo: Repository<Users>
  ) { }

  create(createUserDto: CreateUserDto) {
    return "hai";
  }

  async findAll() {
    return await this.userrepo.find({relations:["location"]});;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
