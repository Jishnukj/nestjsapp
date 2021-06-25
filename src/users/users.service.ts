import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from 'src/location/entities/location.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userrepo: Repository<Users>,
  ) {}

  async create(createUserDto: any) {
    return await this.userrepo.save(createUserDto);
  }

  async findAll() {
    //return await this.userrepo.find();
    return await this.userrepo.find({
      order: {
        'name': 'ASC',
        'password': 'DESC'
      }
    });
    //return await this.userrepo.find({relations:["location"]});;
    // return await this.userrepo.find({select:['name','password']});
    // return await this.userrepo.find({
    //   select:['name','password'],
    //   relations:['location']
    // });
  }

  async findOne(id: number) {
    let user = await this.userrepo.findOne({
      relations: ['location'],
      where: [
        { id: id },
      ]
    });
    return user.location.location;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
