import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from 'src/app/entities';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(todo) {
    return this.todoRepository.save(todo);
  }

  async findAll() {
    return this.todoRepository.find();
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
