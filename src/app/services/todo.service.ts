import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todos: string[] = ['Limpar casa', 'Estudar'];

  constructor() {
    console.log(this.todos);
  }

  getTodos() {
    return this.todos;
  }
}
