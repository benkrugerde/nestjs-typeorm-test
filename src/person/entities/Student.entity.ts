import {Person} from './Person.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity('student')
export class Student extends Person {

    constructor(){
        super();
        this.type = 'student';
    }

    @Column()
    faculty: string;

}