import { Component, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TypesTodo {
  text: string;
  id: number;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  faTrash = faTrash;
  todos: TypesTodo[] = [];

  getTodos() {
    return this.todos;
  }

  ngOnInit(): void {
    this.getTodos();
  }

  onAddTodo(todo: string) {
    if (todo === '') {
      alert('Adicione um todo');
      return;
    }
    this.todos.push({
      text: todo,
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
