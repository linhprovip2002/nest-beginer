import { Module } from '@nestjs/common';
import { TasksModule } from './apis/';
@Module({
  imports: [TasksModule],
})
export class AppModule {}
