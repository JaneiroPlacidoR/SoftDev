import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>;

@Schema()
export class Tasks {
  @Prop({require:true})
  taskname: string;

  @Prop()
  description: string;

  @Prop()
  hour: number;
  
  @Prop()
  state: string;

  @Prop()
  create_date: string;

  @Prop()
  write_date: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);