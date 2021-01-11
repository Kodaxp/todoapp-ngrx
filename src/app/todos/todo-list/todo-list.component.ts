import { Component } from '@angular/core';
import {TodoModel} from "../models/todo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {filtrosValidos} from "../../filtro/filtro.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList: TodoModel[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) {

    store.subscribe( ({ todos, filtro }) => {

      this.todoList = todos;
      this.filtroActual = filtro;

    })

  }

}
