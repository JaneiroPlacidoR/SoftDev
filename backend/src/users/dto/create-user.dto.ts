import {IsNotEmpty, Length} from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    group:string;

    @IsNotEmpty()
    photo:string;

    @IsNotEmpty()
    create_date:string;

    @IsNotEmpty()
    write_date:string;
}
