import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestresourceModule } from './testresource/testresource.module';
import { LocationModule } from './location/location.module';
import { UsersModule } from './users/users.module';
import { SublocModule } from './subloc/subloc.module';
import { DatasModule } from './datas/datas.module';
import { NumModule } from './num/num.module';
import { Connection } from 'typeorm/connection/Connection';
@Module({
  imports: [  TestresourceModule, LocationModule, UsersModule, SublocModule, DatasModule, NumModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
