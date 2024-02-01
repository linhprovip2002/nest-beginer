import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from 'src/app/modules/todo/entities/Todo.entity';
import { TodoListQueryDto } from 'src/app/modules/todo/dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(todo) {
    return this.todoRepository.save(todo);
  }

  async findAll(query: TodoListQueryDto): Promise<Todo[]> {
    const { page = 1, limit = 10, search } = query;
    const queryBuilder = this.todoRepository.createQueryBuilder('todo');

    if (search) {
      queryBuilder.where(
        'todo.title LIKE :search OR todo.description LIKE :search',
        { search: `%${search}%` },
      );
    }

    queryBuilder.skip((page - 1) * limit).take(limit);

    return await queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Todo | null> {
    return this.todoRepository.findOneBy({ id });
  }

  async update(id: number, todo) {
    return this.todoRepository.update(id, todo);
  }

  async delete(id: number) {
    return this.todoRepository.delete(id);
  }
}
