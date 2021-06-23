import { Body, Delete, Get, Param, Patch } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationDto } from './dto/location.dto';
import { LocationCreateDto } from './dto/locationcreate.dto';
import { LocationService } from './location.service';

@ApiTags('location')
@Controller('locations')
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

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.loactionservice.findByid(id);
    }

    @Get('name/:name')
    getByName(@Param('name') name: string) {
        return this.loactionservice.findByname(name);
    }

    @Patch()
    update(@Body() loc:LocationDto){
        return this.loactionservice.update(loc);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.loactionservice.delete(id);
    }
}
