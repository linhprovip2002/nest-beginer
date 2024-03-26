import { Injectable, Logger } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './task.model';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.OPEN,
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Task 2 description',
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Task 3 description',
      status: TaskStatus.DONE,
    },
  ];
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
  getTasksWithFilters(tasksQuery: any) {
    Logger.debug('tasksQuery: ', tasksQuery);
    const tasks = this.tasks;
    if (tasksQuery.status) {
      tasks.filter((task) => task.status === tasksQuery.status);
    }
    if (tasksQuery.search) {
      tasks.filter((task) => {
        task.title.includes(tasksQuery.search) ||
          task.description.includes(tasksQuery.search);
      });
    }
    if (tasksQuery.length === 0) {
      return [];
    }
    return tasks;
  }
}
