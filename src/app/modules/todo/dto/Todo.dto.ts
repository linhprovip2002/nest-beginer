import { ApiProperty } from '@nestjs/swagger';
import { IResponse } from './Response.dto';
import { Status } from '../entities/Todo.entity';
export class TodoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  color?: string;

  @ApiProperty()
  backgroundColor?: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ enum: ['TODO', 'DOING', 'DONE'] })
  status: Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class TodoListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ enum: ['TODO', 'DOING', 'DONE'] })
  status: Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class TodoListQueryDto {
  @ApiProperty({ required: false, default: 1 })
  page?: number;

  @ApiProperty({ required: false, default: 10 })
  limit?: number;

  @ApiProperty({ required: false })
  search?: string;
}

export class TodoCreateDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}

export class TodoUpdateDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ enum: ['TODO', 'DOING', 'DONE'] })
  status: Status;
  @ApiProperty()
  backgroundColor?: string;
  @ApiProperty()
  color?: string;
}

export class DeleteResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  success: boolean;
}

export class TodoResponse implements IResponse<TodoDto> {
  @ApiProperty()
  message: string;

  @ApiProperty()
  data: TodoDto;
}

export class TodoListResponse implements IResponse<TodoListDto[]> {
  @ApiProperty()
  message: string;

  @ApiProperty()
  data: TodoListDto[];
}
