import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from "./models/todo.model";
import {filtrosValidos} from "../filtro/filtro.actions";

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: TodoModel[], filtro: filtrosValidos): TodoModel[] {

    switch (filtro) {

      case "completados":
        return todos.filter( todo => todo.completado);

      case "pendientes":
        return todos.filter( todo => !todo.completado);

      default:
        return todos;

    }
  }

}
