import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  message: string;

  @Column()
  userName: string;

  @Column()
  userId: number;
}
