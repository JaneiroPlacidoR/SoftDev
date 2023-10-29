import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Tasks, TasksDocument} from './schema/tasks.schema'

@Injectable()
export class TasksService {

  constructor(@InjectModel(Tasks.name) private TasksModule:Model<TasksDocument>){}


 async create(createTaskDto: CreateTaskDto) {
    const task_create = await this.TasksModule.create(createTaskDto) 
    return task_create;
  }

  async findAll() {
    const all_tasks = await this.TasksModule.find().exec() 
    return all_tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
