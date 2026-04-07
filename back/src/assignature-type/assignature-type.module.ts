import { Module } from '@nestjs/common';
import { AssignatureTypeService } from './assignature-type.service';
import { AssignatureTypeController } from './assignature-type.controller';
import { PrismaModule } from '../database/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [AssignatureTypeController],
  providers: [AssignatureTypeService],
})
export class AssignatureTypeModule {}
