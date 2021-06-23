import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TestresourceModule } from './testresource/testresource.module';
import { LocationModule } from './location/location.module';
import { UsersModule } from './users/users.module';
import { SublocModule } from './subloc/subloc.module';
import { DatasModule } from './datas/datas.module';
@Module({
  imports: [ DatabaseModule, TestresourceModule, LocationModule, UsersModule, SublocModule, DatasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
