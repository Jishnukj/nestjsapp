import { Module } from '@nestjs/common';
import { TestresourceService } from './testresource.service';
import { TestresourceController } from './testresource.controller';
import { testresourceProviders } from './testressource.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TestresourceController],
  providers: [TestresourceService,...testresourceProviders]
})
export class TestresourceModule {}
