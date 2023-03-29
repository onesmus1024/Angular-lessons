import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent {


  @Input()todo = {
    id: 1,
    title: 'Todo 1',
    description: 'Todo 1 description',
    completed: false
  };

  constructor() { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  deleteTodo() {
    console.log('Delete todo');
  }
}
