import {createAction, props} from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
  '[Counter Component] Set Filter',
  props<{ filtro: filtrosValidos }>());
