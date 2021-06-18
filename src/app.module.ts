import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { config } from './orm.config';
import { CompaniesModule } from './companies/companies.module';
import { DatabaseModule } from './database/database.module';
import { TestresourceModule } from './testresource/testresource.module';
@Module({
  imports: [ DatabaseModule, CompaniesModule, TestresourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
