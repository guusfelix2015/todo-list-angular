import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService],
})
export class TodoComponent {
  todos: string[] = [];

  constructor(private todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
}
