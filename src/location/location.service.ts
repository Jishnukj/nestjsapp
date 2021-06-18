import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LocationDto } from './dto/location.dto';
import { LocationCreateDto } from './dto/locationcreate.dto';

@Injectable()
export class LocationService {
    constructor(
        @Inject('LOCATION_REPO')
        private locationrepo: Repository<Location>
    ){}

    async findAll(){
        return await this.locationrepo.find();
    }

    async create(locdto:any){
        return await this.locationrepo.save(locdto);
    }
}
