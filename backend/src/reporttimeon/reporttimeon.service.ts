import { Injectable } from '@nestjs/common';
import { CreateReporttimeonDto } from './dto/create-reporttimeon.dto';
import { UpdateReporttimeonDto } from './dto/update-reporttimeon.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ReportTimeOn, ReportTimeOnDocument } from './schema/ReportTimeOn.schema'

@Injectable()
export class ReporttimeonService {

  constructor(@InjectModel(ReportTimeOn.name) private ProjectsModule:Model<ReportTimeOnDocument                                                                  >){}

  create(createReporttimeonDto: CreateReporttimeonDto) {
    return 'This action adds a new reporttimeon';
  }

  findAll() {
    return `This action returns all reporttimeon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporttimeon`;
  }

  update(id: number, updateReporttimeonDto: UpdateReporttimeonDto) {
    return `This action updates a #${id} reporttimeon`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporttimeon`;
  }
}
