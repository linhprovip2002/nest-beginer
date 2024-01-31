import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { JoiValidationPipe } from 'src/app/pipes';
import { TodoSchema, IdSchema } from 'src/app/interceptors';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @UsePipes(new JoiValidationPipe(TodoSchema))
  @Post()
  create(@Body() body) {
    return this.todoService.create(body);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @UsePipes(new JoiValidationPipe(IdSchema))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }
  @UsePipes(new JoiValidationPipe(IdSchema))
  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.todoService.update(+id, body);
  }
  @UsePipes(new JoiValidationPipe(IdSchema))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.delete(+id);
  }
}
