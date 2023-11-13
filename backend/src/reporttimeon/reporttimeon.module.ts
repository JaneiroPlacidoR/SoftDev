import { Module } from '@nestjs/common';
import { ReporttimeonService } from './reporttimeon.service';
import { ReporttimeonController } from './reporttimeon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Users, UsersSchema} from '../Users/schema/Users.schema'
import {Tasks, TasksSchema} from '../tasks/schema/tasks.schema'


@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Users.name,
        schema:UsersSchema,
      }
    ]),
    MongooseModule.forFeature([
      {
        name:Tasks.name,
        schema:TasksSchema,
      }
    ])
  ],
  controllers: [ReporttimeonController],
  providers: [ReporttimeonService],
})
export class ReporttimeonModule {}
