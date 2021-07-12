import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    UsersModule,
    ProjectModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgresDB',
      database: 'nestjsDB',
      synchronize: true,
      autoLoadEntities: true,
    }),

    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
