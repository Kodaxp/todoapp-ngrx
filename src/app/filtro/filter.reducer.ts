import {createReducer, on} from '@ngrx/store';
import {filtrosValidos, setFilter} from "./filtro.actions";

export const estadoInicial: filtrosValidos = "todos";

const _setFilter = createReducer(
  estadoInicial,

  on( setFilter, (state, {filtro}) => filtro)
);

export function setFilterReducer(state, action) {
  return _setFilter(state, action);
}
