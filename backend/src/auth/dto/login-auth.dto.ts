import {IsNotEmpty, MinLength} from "class-validator";

export class LoginAuthDto{
    @IsNotEmpty()
    username:string;

    @MinLength(4)
    password:string;
}