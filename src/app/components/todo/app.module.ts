import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoService } from 'src/app/services/todo.service';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule],
  exports: [TodoComponent],
  providers: [TodoService],
})
export class AppModule {}
