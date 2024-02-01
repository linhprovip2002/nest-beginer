import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { JoiValidationPipe } from 'src/app/pipes';
import { TodoSchema } from 'src/app/interceptors';
import {
  TodoCreateDto,
  TodoListQueryDto,
  TodoUpdateDto,
  TodoResponse,
  DeleteResponse,
} from 'src/app/modules/todo/dto';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @UsePipes(new JoiValidationPipe(TodoSchema))
  @Post()
  create(@Body() createTodoDto: TodoCreateDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Query() query: TodoListQueryDto) {
    return this.todoService.findAll(query);
  }
  // @UsePipes(new JoiValidationPipe(IdSchema))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  // @UsePipes(new JoiValidationPipe(IdSchema))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTodoDto: TodoUpdateDto,
  ): Promise<TodoResponse> {
    await this.todoService.update(id, updateTodoDto);
    const updatedTodo = await this.todoService.findOne(id);
    return {
      message: 'Todo updated successfully',
      data: updatedTodo,
    };
  }

  // @UsePipes(new JoiValidationPipe(IdSchema))
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<DeleteResponse> {
    await this.todoService.delete(id);
    return {
      message: 'Todo deleted successfully',
      success: true,
    };
  }
}
