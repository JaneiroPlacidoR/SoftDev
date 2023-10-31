import {IsNotEmpty} from 'class-validator';

export class CreateProjectDto {

    @IsNotEmpty()
    project_name:string;

    @IsNotEmpty()
    description:string;

    @IsNotEmpty()
    team_leader:number;

    @IsNotEmpty()
    users:string;

    @IsNotEmpty()
    tasks:string;

    @IsNotEmpty()
    start_date:string;

    @IsNotEmpty()
    finish_date:string;

    @IsNotEmpty()
    create_date:string;

    @IsNotEmpty()
    write_date:string;

}
