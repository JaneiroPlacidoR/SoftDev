import { Logger } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tasks, TasksDocument } from './schema/tasks.schema'
import {Projects, ProjectsDocument} from '../projects/schema/projects.schema'

@Injectable()
export class TasksService {

  constructor(@InjectModel(Tasks.name) private TasksModule: Model<TasksDocument>,
  @InjectModel(Projects.name) private ProjectsModule:Model<ProjectsDocument> ) { }


  async create(createTaskDto: CreateTaskDto) {
    const task_create = await this.TasksModule.create(createTaskDto)
    return task_create;
  }

  //Incompleted logic get current project of tasks
  async findAllProject() {
    const related_project = await this.ProjectsModule.find({ tasks: '654e39d1fe63c93eb1de3094' }).exec()
    return related_project;
  }

  async findAll() {
    const all_tasks = await this.TasksModule.find().exec()
    return all_tasks;
  }

  // async findOne(id: string) {
  //   const onetask = await this.TasksModule.findById({id})
  //   return onetask;
  // }

  async findOne(id: string): Promise<TasksDocument> {

    const task = await this.TasksModule.findById(id);
    console.log(task)

    if (!task) throw new NotFoundException('No product with given ID.');

    return task;
  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  async update(
    id: string,
    attrs: Partial<TasksDocument>
  ): Promise<TasksDocument> {
    const { users, taskname, description, create_date, hour, state, write_date } =
      attrs;

    Logger.log(users)
    users.forEach(element => {
        Logger.log(element)
    });

    const task = await this.TasksModule.findById(id);

    if (!task) throw new NotFoundException('No task with given ID.');

    task.taskname = taskname;
    task.description = description;
    task.create_date = create_date;
    task.hour = hour;
    task.state = state;
    task.users = users;
    task.write_date = write_date;

    const updatedTask = await task.save();

    return updatedTask;
  }

  async deleteOne(id: string): Promise<TasksDocument> {

    const task = await this.TasksModule.findById(id);

    if (!task) throw new NotFoundException('No task with given ID.');

    const deleteTask = await task.deleteOne();    
    
    return deleteTask
  }


}
