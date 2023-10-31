import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema()
export class Projects {

  @Prop({require:true})
  project_name: string;

  @Prop()
  description: string;

  @Prop()
  team_leader: string;

  @Prop({unique:true})
  users: string;
  
  @Prop()
  tasks: string;

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