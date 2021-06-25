import { Module } from '@nestjs/common';
import { TestresourceService } from './testresource.service';
import { TestresourceController } from './testresource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testresource } from './entities/testresource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testresource])],
  controllers: [TestresourceController],
  providers: [TestresourceService]
})
export class TestresourceModule {}
