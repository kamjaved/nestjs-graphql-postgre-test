import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Project } from '../project/project.entity';
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryColumn()
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

  // @OneToMany(() => Project, (project) => project.user)
  // projects: Project[];

  @ManyToOne(() => Project, (project) => project.users)
  @Field(() => Project)
  project: Project;

  @Column()
  @Field()
  projectId: string;
}
