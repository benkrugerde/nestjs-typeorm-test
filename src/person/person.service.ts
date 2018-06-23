import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/Person.entity';
import { Employee } from './entities/Employee.entity';
import { Student } from './entities/Student.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,

        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,

        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) { }

    async createSample() {

        const employee = new Employee();
        employee.firstName = 'umed';
        employee.lastName = 'khudoiberdiev';
        employee.salary = 200000;
        await this.employeeRepository.save(employee);

        const student = new Student();
        student.firstName = 'umed';
        student.lastName = 'khudoiberdiev';
        student.faculty = 'computer science';

        await this.studentRepository.save(student);
    }

    async findSample() {
        return await this.studentRepository.find();
    }
}
