import { Module } from '@nestjs/common';
import { AssignatureTypeModule } from './assignature-type/assignature-type.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AssignatureTypeModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
