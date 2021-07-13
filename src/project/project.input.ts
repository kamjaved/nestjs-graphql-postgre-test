import { CreateUserInput } from './../users/user.input';
import { User } from 'src/users/user.entity';
import { MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field({ nullable: true })
  id: string;

  @MinLength(2)
  @Field({ nullable: true })
  name: string;

  @Field(() => [CreateUserInput], { nullable: true })
  users: User[];
}
