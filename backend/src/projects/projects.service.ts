import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Projects, ProjectsDocument} from './schema/projects.schema'

@Injectable()
export class ProjectsService {

  constructor(@InjectModel(Projects.name) private ProjectsModule:Model<ProjectsDocument>){}

  async create(createProjectDto: CreateProjectDto) {
    const project_create = await this.ProjectsModule.create(createProjectDto)
    return project_create;
  }

  async findAll() {
    const all_projects = await this.ProjectsModule.find().exec()
    return all_projects;
  }

  async findOne(id: string): Promise<ProjectsDocument> {

    const project = await this.ProjectsModule.findById(id);
    console.log(project)

    if (!project) throw new NotFoundException('No product with given ID.');

    return project;
  }

  // update(id: number, updateprojectDto: UpdateprojectDto) {
  //   return `This action updates a #${id} project`;
  // }

  async update(
    id: string,
    attrs: Partial<ProjectsDocument>
  ): Promise<ProjectsDocument> {
    const { project_name, description, team_leader,users,tasks,start_date,finish_date,create_date,write_date } =
      attrs;

    const project = await this.ProjectsModule.findById(id);

    if (!project) throw new NotFoundException('No project with given ID.');

    project.project_name = project_name;
    project.description = description;
    project.team_leader = team_leader;
    project.users = users;
    project.tasks = tasks;
    project.start_date = start_date;
    project.finish_date = finish_date;
    project.create_date = create_date;
    project.write_date = write_date;

    const updatedproject = await project.save();

    return updatedproject;
  }

  async deleteOne(id: string): Promise<ProjectsDocument> {

    const project = await this.ProjectsModule.findById(id);

    if (!project) throw new NotFoundException('No project with given ID.');

    const deleteproject = await project.deleteOne();    
    
    return deleteproject
  }
}
