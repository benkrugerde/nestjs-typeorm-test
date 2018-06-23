import { Entity, TableInheritance, PrimaryColumn, ObjectID, ObjectIdColumn, Column } from 'typeorm';

// todo: some things left to do:
// * check how it works when is join (conditions are not added in the joins right now)
@Entity('sample28_person')
@TableInheritance({ column: { name: 'type', type: 'varchar'} } )
export abstract class Person {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}