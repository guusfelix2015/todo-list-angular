import { Injectable } from '@angular/core';

interface TypesTodo {
  text: string;
  check: boolean;
}

@Injectable()
export class TodoService {
  private todos: TypesTodo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push({ text: todo, check: false });
  }
}
