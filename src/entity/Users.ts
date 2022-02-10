import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  surName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
