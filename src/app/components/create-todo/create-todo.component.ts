import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
  providers: [TodoService],
})
export class CreateTodoComponent {
  faTrash = faTrash;
  todos: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onAddTodo(todo: string) {
    this.todoService.addTodo(todo);
  }
}
