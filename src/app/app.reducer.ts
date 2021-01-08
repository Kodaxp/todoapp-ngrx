import {TodoModel} from "./todos/models/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";
import {filtrosValidos} from "./filtro/filtro.actions";
import {setFilterReducer} from "./filtro/filter.reducer";

export interface AppState {
  todos: TodoModel[];
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: setFilterReducer
}
