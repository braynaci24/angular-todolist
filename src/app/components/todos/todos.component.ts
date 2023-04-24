import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = "";
  @ViewChild('todoInput')
  todoInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First Todo",
        completed: false
      },
      {
        content: "Second Todo",
        completed: true
      }
    ]
  }
  
  addTodo() {
    this.todoInput.nativeElement.value = "";
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
