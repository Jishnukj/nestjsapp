import { Body, Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationService } from './location.service';
import { Location} from './entities/location.entity'

@Controller('location')
export class LocationController {
    constructor(private readonly loactionservice: LocationService){}

    @Get()
    findAll(){
        return this.loactionservice.findAll();
    }

    @Post()
    create(@Body() loc: LocationDto){
        return this.loactionservice.create(loc);
    }
}
