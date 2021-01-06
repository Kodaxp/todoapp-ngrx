import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @ViewChild('inputFisico', {static: false}) txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkCompletado.valueChanges.subscribe( () => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) )
    });
  }

  editar() {
    this.editando = true;

    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    });
  }

  terminarEdicion() {
    this.editando = false;
  }

}
