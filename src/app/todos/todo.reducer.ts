import {createReducer, on} from '@ngrx/store';
import * as actions from "./todo.actions";
import {TodoModel} from "./models/todo.model";

export const estadoInicial: TodoModel[] = [
  new TodoModel('Salvar al mundo'),
  new TodoModel('Recolectar las piedras del infinito'),
  new TodoModel('Salvar al tio Ben :c'),
  new TodoModel('vencer a Thanos')
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, {texto}) => [...state, new TodoModel(texto)]),

  on(actions.toggle, (state, {id}) => {

    return state.map( todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }

      } else {
        return todo;
      }
    });

  })

);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
