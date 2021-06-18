import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LocationDto } from './dto/location.dto';
import { LocationCreateDto } from './dto/locationcreate.dto';
import { LocationOn } from './entities/location.entity';

@Injectable()
export class LocationService {
    constructor(
        @Inject('LOCATION_REPO')
        private locationrepo: Repository<LocationOn>
    ){}

    async findAll(){
        return await this.locationrepo.find();
    }

    async create(loc: LocationDto) {
        return await this.locationrepo.save(loc);
      }
}
