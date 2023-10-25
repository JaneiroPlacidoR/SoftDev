import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({require:true})
  username: string;

  @Prop()
  password: string;

  @Prop()
  group: string;

  @Prop({unique:true})
  email: string;
  
  @Prop()
  photo: string;

  @Prop()
  create_date: string;

  @Prop()
  write_date: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);