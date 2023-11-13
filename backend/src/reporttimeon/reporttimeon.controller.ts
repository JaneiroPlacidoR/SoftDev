import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporttimeonService } from './reporttimeon.service';
import { CreateReporttimeonDto } from './dto/create-reporttimeon.dto';
import { UpdateReporttimeonDto } from './dto/update-reporttimeon.dto';

@Controller('reporttimeon')
export class ReporttimeonController {
  constructor(private readonly reporttimeonService: ReporttimeonService) {}

  @Post()
  create(@Body() createReporttimeonDto: CreateReporttimeonDto) {
    return this.reporttimeonService.create(createReporttimeonDto);
  }

  @Get()
  findAll() {
    return this.reporttimeonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporttimeonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporttimeonDto: UpdateReporttimeonDto) {
    return this.reporttimeonService.update(+id, updateReporttimeonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporttimeonService.remove(+id);
  }
}
