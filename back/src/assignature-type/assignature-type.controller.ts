import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignatureTypeService } from './assignature-type.service';
import { CreateAssignatureTypeDto } from './dto/create-assignature-type.dto';
import { UpdateAssignatureTypeDto } from './dto/update-assignature-type.dto';

@Controller('assignature-type')
export class AssignatureTypeController {
  constructor(private readonly assignatureTypeService: AssignatureTypeService) {}

  @Post()
  create(@Body() createAssignatureTypeDto: CreateAssignatureTypeDto) {
    return this.assignatureTypeService.create(createAssignatureTypeDto);
  }

  @Get()
  findAll() {
    return this.assignatureTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignatureTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignatureTypeDto: UpdateAssignatureTypeDto) {
    return this.assignatureTypeService.update(id, updateAssignatureTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignatureTypeService.remove(id);
  }
}
