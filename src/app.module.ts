import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TestresourceModule } from './testresource/testresource.module';
@Module({
  imports: [ DatabaseModule, TestresourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
