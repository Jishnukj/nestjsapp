import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LocationCreateDto } from './dto/locationcreate.dto';
import { Locations } from './entities/location.entity';

@Injectable()
export class LocationService {
    constructor(
        @Inject('LOCATION_REPO')
        private locationrepo: Repository<Locations>
    ){}

    async findAll(){
        return await this.locationrepo.find();
    }

    async create(loc: LocationCreateDto) {
        return await this.locationrepo.save(loc);
      }
}
