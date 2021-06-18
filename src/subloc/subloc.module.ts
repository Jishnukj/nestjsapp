import { Module } from '@nestjs/common';
import { SublocService } from './subloc.service';
import { SublocController } from './subloc.controller';
import { Sublocationproviders } from './subloc.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SublocController],
  providers: [SublocService,...Sublocationproviders]
})
export class SublocModule {}
