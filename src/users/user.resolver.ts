import { Project } from '../project/project.entity';
import { CreateUserInput } from './user.input';
import { UsersService } from './users.service';
import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  private logger = new Logger('UserResolver');

  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: string) {
    // this.logger.log('Get User By ID');
    return this.usersService.getUserByID(id);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => String)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.usersService.updateUser(id, createUserInput);
  }
}
