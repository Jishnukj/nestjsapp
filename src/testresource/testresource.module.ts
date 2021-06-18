import { Module } from '@nestjs/common';
import { TestresourceService } from './testresource.service';
import { TestresourceController } from './testresource.controller';

@Module({
  controllers: [TestresourceController],
  providers: [TestresourceService]
})
export class TestresourceModule {}
