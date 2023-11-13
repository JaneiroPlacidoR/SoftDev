import { Inject, Injectable, HttpException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Model } from 'mongoose';
import { Users, UsersDocument, UsersSchema } from 'src/users/schema/users.schema'
import { InjectModel } from '@nestjs/mongoose';
import { hash,compare} from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
     @InjectModel(Users.name) private readonly userModel : Model<UsersDocument>,
     private jwtAuthService:JwtService
  ){}

 async register(userObject:RegisterAuthDto){
  const { password } = userObject;
  const plainToHash = await hash(password, 10)
  userObject = {...userObject, password:plainToHash}
  return this.userModel.create(userObject)
 }

  async login(userObjectLogin:LoginAuthDto){
    const {username, password} = userObjectLogin;
    const findUser = await this.userModel.findOne({username});

    if(!findUser) throw new HttpException('USER_NOT_FOUND',404);
    const checkPassword = await compare(password, findUser.password);
    if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT',403);

    const payload = {id:findUser.id,username:findUser.username}
    const token = this.jwtAuthService.sign(payload)
    const data = {
      user:findUser,
      token,
    };
    return data;

  }

}
