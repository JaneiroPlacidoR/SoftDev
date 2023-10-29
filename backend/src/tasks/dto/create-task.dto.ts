import {IsNotEmpty, Length} from 'class-validator';

export class CreateTaskDto {

    @IsNotEmpty()
    taskname:string;

    @IsNotEmpty()
    description:string;

    @IsNotEmpty()
    hour:number;

    @IsNotEmpty()
    state:string;

    @IsNotEmpty()
    create_date:string;

    @IsNotEmpty()
    write_date:string;
}
