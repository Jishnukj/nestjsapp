import { Body, Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { LocationCreateDto } from './dto/locationcreate.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor(private readonly loactionservice: LocationService){}

    @Get()
    findAll(){
        return this.loactionservice.findAll();
    }

    @Post()
    create(@Body() loc: LocationCreateDto){
        return this.loactionservice.create(loc);
    }
}
