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

  on(actions.limpiarTodos, state => state.filter( todo => !todo.completado)),

  on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(actions.toggleAll, (state, {completado}) => state.map( todo => { return { ...todo, completado }} )),

  on(actions.toggle, (state, {id}) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }

      } else {
        return todo;
      }
    });

  }),

  on(actions.editar, (state, {id, texto}) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          texto
        }
      } else {
        return todo;
      }
    });

  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
