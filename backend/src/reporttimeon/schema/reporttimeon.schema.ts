import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Tasks} from '../../tasks/schema/tasks.schema'
import {Users} from '../../users/schema/users.schema'
import * as mongoose from 'mongoose';

export type ReportTimeOnDocument = HydratedDocument<ReportTimeOn>;

@Schema()
export class ReportTimeOn {

    @Prop()
    date: string;

    @Prop()
    hour: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users',
        default: null,
    })
    users: Users;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Tasks',
        default: null,
        unique: true
    })
    tasks: Tasks;

    @Prop()
    create_date: string;

    @Prop()
    write_date: string;
}

export const ReportTimeOnSchema = SchemaFactory.createForClass(ReportTimeOn);