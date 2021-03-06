import { ChildEntity, Column } from 'typeorm';
import { Person } from './Person.entity';

@ChildEntity('employee')
export class Employee extends Person {
    constructor(){
        super();
        this.type = 'employee';
    }
    @Column()
    salary: number;

}