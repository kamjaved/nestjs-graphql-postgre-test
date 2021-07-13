import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => User, (user) => user.projects)
  @Field(() => [User])
  users: User[];
}
