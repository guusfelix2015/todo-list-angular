import { Injectable } from '@angular/core';

interface TypesTodo {
  text: string;
  check: boolean;
  id: number;
}

@Injectable()
export class TodoService {
  private todos: TypesTodo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: string) {
    if (todo === '') {
      alert('Insira uma tarefa');
      return;
    }
    this.todos.push({
      text: todo,
      check: false,
      id: Math.floor(Math.random() * 1000000),
    });
  }

  removeTodo(todo: TypesTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == todo.id) {
        this.todos.splice(i, 1);
      }
    }
  }
}
