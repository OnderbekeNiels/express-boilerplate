import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class UserInput {
  @Column()
  surName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
