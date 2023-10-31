import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
