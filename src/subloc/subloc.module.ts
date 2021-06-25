import { Module } from '@nestjs/common';
import { SublocService } from './subloc.service';
import { SublocController } from './subloc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subloc } from './entities/subloc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subloc])],
  controllers: [SublocController],
  providers: [SublocService]
})
export class SublocModule {}
