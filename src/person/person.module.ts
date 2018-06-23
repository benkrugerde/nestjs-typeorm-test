import { Module } from '@nestjs/common';
import { Person } from './entities/Person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/Student.entity';
import { Employee } from './entities/Employee.entity';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
    imports: [ TypeOrmModule.forFeature([Person]), TypeOrmModule.forFeature([Student]), TypeOrmModule.forFeature([Employee]) ],
    providers: [PersonService],
    controllers: [PersonController],
})
export class PersonModule { }
