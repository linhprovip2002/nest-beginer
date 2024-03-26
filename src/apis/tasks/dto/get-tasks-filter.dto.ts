import { TaskStatus } from '../task.model';
import { ApiProperty } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @ApiProperty({
    required: false,
    description: 'The search query to filter tasks by title',
  })
  search?: string;

  @ApiProperty({
    required: false,
    description: 'The status to filter tasks by',
    enum: ['OPEN', 'IN_PROGRESS', 'DONE'],
  })
  status?: TaskStatus;
}
