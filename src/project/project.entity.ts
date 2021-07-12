import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @PrimaryColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  // @ManyToOne(() => User, (user) => user.projects)
  // @Field(() => User)
  // user: User;

  @OneToMany(() => User, (user) => user.project)
  @Field(() => [User], { nullable: true })
  users: User[];
}
