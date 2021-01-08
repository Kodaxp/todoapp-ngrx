import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../models/todo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: TodoModel[] = [];

  constructor(private store: Store<AppState>) {
    store.select('todos').subscribe( todos => this.todoList = todos)

    // store.subscribe( store => {
    //   this.todoList = store.todos.filter( todo => todo )
    // });
  }

  ngOnInit() {
  }

}
