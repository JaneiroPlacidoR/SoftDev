import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Users, UsersSchema} from '../../users/schema/users.schema'

export type TasksDocument = HydratedDocument<Tasks>;

enum State {
  TO_DO = 'ToDo',
  IN_PROGRESS = 'InProgress',
  COMPLETED = 'Completed',
  DEFERRED = 'Deferred',
  CANCELED = 'Canceled',
}

@Schema()
export class Tasks {

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Users',
    default: null,
  })
  users: Users[];

  @Prop({require:true})
  taskname: string;

  @Prop()
  description: string;

  @Prop()
  hour: number;
  
  @Prop({enum:State, default:State.TO_DO})
  state: string;

  @Prop()
  create_date: string;

  @Prop()
  write_date: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);