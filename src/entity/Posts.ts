import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Comment } from "./Comments";

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
