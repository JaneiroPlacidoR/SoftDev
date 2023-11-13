import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    // Usa el método `find()` para recuperar todos los usuarios
    const allUsers = await this.usersModule.find().exec();
    return allUsers;
  }

  async findOne(id: string): Promise<UsersDocument> {

    const user = await this.usersModule.findById(id);
    console.log(user)

    if (!user) throw new NotFoundException('No product with given ID.');

    return user;
  }

  // update(id: number, updateuserDto: UpdateuserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async update(
    id: string,
    attrs: Partial<UsersDocument>
  ): Promise<UsersDocument> {
    const { username, password, group, email, photo, create_date, write_date } =
      attrs;

    const user = await this.usersModule.findById(id);

    if (!user) throw new NotFoundException('No user with given ID.');

    user.username = username;
    user.password = password;
    user.group = group;
    user.email = email;
    user.photo = photo;
    user.create_date = create_date;
    user.write_date = write_date;

    const updateduser = await user.save();

    return updateduser;
  }

  async deleteOne(id: string): Promise<UsersDocument> {

    const user = await this.usersModule.findById(id);

    if (!user) throw new NotFoundException('No user with given ID.');

    const deleteuser = await user.deleteOne();    
    
    return deleteuser
  }
}
