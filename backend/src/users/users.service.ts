import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Users, UsersDocument} from './schema/users.schema'
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private usersModule:Model<UsersDocument>){}

  async create(createUserDto: CreateUserDto) {
    const user_create = await this.usersModule.create(createUserDto)
    return user_create;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
