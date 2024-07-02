import { Field, ObjectType } from '@nestjs/graphql';

import data from '../data';
import { Todo } from './todo.model';

data.users;
@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  birthday: string;

  @Field(() => String)
  email: string;

  @Field(() => [Todo])
  todos: Todo[];
}
