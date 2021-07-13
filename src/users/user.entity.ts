import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Project } from '../project/project.entity';
import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column()
  company: string;

  @ManyToMany(() => Project, (project) => project.users)
  @JoinTable({
    joinColumn: {
      name: 'userId',
    },
    inverseJoinColumn: {
      name: 'projectId',
    },
  })
  @Field(() => [Project])
  projects: Project[];
}
