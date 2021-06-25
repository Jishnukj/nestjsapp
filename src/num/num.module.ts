import { Module } from '@nestjs/common';
import { NumService } from './num.service';
import { NumController } from './num.controller';
import { Num } from './entities/num.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 // imports: [TypeOrmModule.forFeature([Num])],
  controllers: [NumController],
  providers: [NumService]
})
export class NumModule {}
