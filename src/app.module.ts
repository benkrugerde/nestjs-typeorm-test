import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
