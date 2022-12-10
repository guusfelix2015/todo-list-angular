import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todos: string[] = ['Teste', 'hello'];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }
}
