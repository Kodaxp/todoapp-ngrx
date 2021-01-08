import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {filtrosValidos, setFilter} from "../../filtro/filtro.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ["todos", "completados", "pendientes"];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( store => {

      this.filtroActual = store.filtro;

      this.pendientes = store.todos.filter( todo => !todo.completado).length;

    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    this.store.dispatch( setFilter({ filtro }) );
  }

}
