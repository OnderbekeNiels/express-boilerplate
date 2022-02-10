import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class PostInput {
  @Column()
  title: string;

  @Column()
  message: string;

  @Column()
  userId: number;
}
