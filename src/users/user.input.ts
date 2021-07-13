import { Project } from './../project/project.entity';
import { IsOptional, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { CreateProjectInput } from 'src/project/project.input';
// import {} from 'uuid'

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  @MinLength(1)
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @MinLength(1)
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  age?: number;

  @Field({ nullable: true })
  @MinLength(1)
  @IsOptional()
  company?: string;

  @Field(() => [CreateProjectInput], { nullable: true })
  projects: Project[];
}
