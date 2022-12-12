import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TypesTodo {
  text: string;
  check: boolean;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
  providers: [TodoService],
})
export class CreateTodoComponent {
  faTrash = faTrash;
  todos: TypesTodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onAddTodo(todo: string) {
    this.todoService.addTodo(todo);
    console.log(this.todos);
  }

  removeTodo(todo: string) {
    this.todos = this.todos.filter((t) => t.text !== todo);
  }
}
