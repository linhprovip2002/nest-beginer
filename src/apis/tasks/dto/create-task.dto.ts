import { TaskStatus } from '../task.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Task title' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Task description' })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    enum: ['OPEN', 'IN_PROGRESS', 'DONE'],
    example: TaskStatus.IN_PROGRESS,
    description: 'The current status of the task',
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
