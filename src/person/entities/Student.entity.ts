import {Person} from './Person.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity('student')
export class Student extends Person {

    @Column()
    faculty: string;

}