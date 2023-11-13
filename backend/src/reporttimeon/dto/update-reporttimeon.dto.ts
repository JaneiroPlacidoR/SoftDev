import { PartialType } from '@nestjs/mapped-types';
import { CreateReporttimeonDto } from './create-reporttimeon.dto';

export class UpdateReporttimeonDto extends PartialType(CreateReporttimeonDto) {}
