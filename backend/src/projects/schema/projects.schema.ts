import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Tasks} from '../../tasks/schema/tasks.schema'
import {Users} from '../../users/schema/users.schema'
import * as mongoose from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema()
export class Projects {

  @Prop({require:true})
  project_name: string;

  @Prop()
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
    default: null,
  })
  team_leader: Users;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Users',
    default: null,
  })
  users: Users[];
  
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Tasks',
    default: null,
    unique:true
  },)
  tasks: Tasks[];

  @Prop()
  start_date: string;

  @Prop()
  finish_date: string;

  @Prop()
  create_date: string;

  @Prop()
  write_date: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);