import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { LocationController } from './location.controller';
import { locationproviders } from './location.providers';
import { LocationService } from './location.service';

@Module({
    imports: [DatabaseModule],
    controllers: [LocationController],
    providers: [LocationService, ...locationproviders]
})
export class LocationModule { }
