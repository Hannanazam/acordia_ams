import { Component, OnInit ,EventEmitter ,Input,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() i :number | undefined;
  @Input()
  todo: Todo = new Todo;
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
    onClick(todo: Todo){
      this.todoDelete.emit(todo);
      console.log("todo emit onclick");
    }
    onCheckboxClick(todo:Todo){
      console.log(todo);
      this.todoCheckbox.emit(todo);
    }
}
