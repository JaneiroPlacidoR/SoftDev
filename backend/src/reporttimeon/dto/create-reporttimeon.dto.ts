import {IsNotEmpty, Length} from 'class-validator';

export class CreateReporttimeonDto {
    @IsNotEmpty()
    date:string;

    @IsNotEmpty()
    hour:number;

    @IsNotEmpty()
    create_date:string;

    @IsNotEmpty()
    write_date:string;
}
