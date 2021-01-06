import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput = new FormControl('', Validators.required);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  agregar() {
    if (this.txtInput.valid) {
      this.store.dispatch(actions.crear({texto: this.txtInput.value}));
      this.txtInput.reset();
    }
  }

}
