import { Injectable, Logger } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.model';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  create(createTaskDto: CreateTaskDto) {
    Logger.debug('createTaskDto: ', createTaskDto);
    const task: Task = {
      id: Math.random().toString(),
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task.id;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    Logger.debug('updateTaskDto: ', updateTaskDto);
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
