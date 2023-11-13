import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Tasks, TasksSchema} from './schema/tasks.schema'
import {Projects, ProjectsSchema} from '../projects/schema/projects.schema'
@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Tasks.name,
        schema:TasksSchema,
      }
    ]),
    MongooseModule.forFeature([
      {
        name:Projects.name,
        schema:ProjectsSchema,
      }
    ])
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
