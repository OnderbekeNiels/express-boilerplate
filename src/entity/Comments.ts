import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { User } from "./Users";

export class Comment {
  @Column()
  message: string;

  @Column()
  userId: number;
}
