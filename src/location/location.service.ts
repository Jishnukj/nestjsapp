import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LocationDto } from './dto/location.dto';
import { LocationCreateDto } from './dto/locationcreate.dto';
import { Locations } from './entities/location.entity';

@Injectable()
export class LocationService {
    constructor(
        @Inject('LOCATION_REPO')
        private locationrepo: Repository<Locations>
    ) { }

    async findAll() {
        return await this.locationrepo.find({order:{id:'ASC'}});
    }

    async create(loc: LocationCreateDto) {
        return await this.locationrepo.save(loc);
    }

    async findByid(id: number){
        return await this.locationrepo.findOne(id);
    }

    async findByname(loc: string){
        return await this.locationrepo.findOne({location:loc})
    }

    async update(loc: LocationDto){
        let location = await this.locationrepo.findOne(loc.id);
        location.location=loc.location;
        location.pincode=loc.pincode;
        return await this.locationrepo.save(loc);
    }

    // async delete (id:number){
    //     return await this.locationrepo.delete(id);
    // }
    async delete (id:number){
        let loc = await this.locationrepo.findOne(id)
        return await this.locationrepo.remove(loc);
    }
}
