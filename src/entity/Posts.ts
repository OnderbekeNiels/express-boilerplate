import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  message: string;

  @Column()
  userId: number;
}
