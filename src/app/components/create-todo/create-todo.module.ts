import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './create-todo.component';

@NgModule({
  declarations: [CreateTodoComponent],
  imports: [CommonModule],
  exports: [CreateTodoComponent],
})
export class AppModule {}
