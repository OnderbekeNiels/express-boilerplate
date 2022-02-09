import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { User } from "./User";

export class Comment {
  @Column()
  message: string;

  @Column()
  userId: number;
}
