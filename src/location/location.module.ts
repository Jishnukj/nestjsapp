import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locations } from './entities/location.entity';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

@Module({
    imports: [TypeOrmModule.forFeature([Locations])],
    controllers: [LocationController],
    providers: [LocationService]
})
export class LocationModule { }
