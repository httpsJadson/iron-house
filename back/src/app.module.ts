import { Module } from '@nestjs/common';
import { AssignatureTypeModule } from './assignature-type/assignature-type.module';

@Module({
  imports: [AssignatureTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
