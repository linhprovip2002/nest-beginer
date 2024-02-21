import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
