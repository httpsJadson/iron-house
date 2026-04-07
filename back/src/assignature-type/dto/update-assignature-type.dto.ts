import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignatureTypeDto } from './create-assignature-type.dto';

export class UpdateAssignatureTypeDto extends PartialType(CreateAssignatureTypeDto) {}
