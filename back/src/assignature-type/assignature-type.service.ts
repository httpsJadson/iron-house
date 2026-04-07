import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAssignatureTypeDto } from './dto/create-assignature-type.dto';
import { UpdateAssignatureTypeDto } from './dto/update-assignature-type.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AssignatureTypeService {
  constructor(
    private readonly prismaService: PrismaService,
  ){

  }
  async create(createAssignatureTypeDto: CreateAssignatureTypeDto) {
    const AssignatureType = await this.prismaService.plan.create({
      data: createAssignatureTypeDto
    })
    return AssignatureType;
  }

  async findAll() {
    const AssignatureTypes = await this.prismaService.plan.findMany();
    
    return AssignatureTypes;
  }

  async findOne(id: string) {
    const AssignatureType = await this.prismaService.plan.findUnique({
      where: {
        id: id
      }
    })
    if(!AssignatureType){
      throw new HttpException('AssignatureType not found', HttpStatus.NOT_FOUND);
    }
    return AssignatureType; 
  }

  async update(id: string, updateAssignatureTypeDto: UpdateAssignatureTypeDto) {
    const AssignatureTypeExists = await this.prismaService.plan.findUnique({
      where: {
        id: id
      }
    });
    if(!AssignatureTypeExists){
      throw new HttpException('AssignatureType not found', HttpStatus.NOT_FOUND);
    }
    const AssignatureType = await this.prismaService.plan.update({
      where: {
        id: id
      },
      data: updateAssignatureTypeDto
    })
    
    return AssignatureType
  }

  async remove(id: string) {
    const AssignatureTypeExists = await this.prismaService.plan.findUnique({
      where: {
        id: id
      }
    });
    if(!AssignatureTypeExists){
      throw new HttpException('AssignatureType not found', HttpStatus.NOT_FOUND);
    }
    return await this.prismaService.plan.delete({
      where: {
        id: id
      }
    });
  }
}
