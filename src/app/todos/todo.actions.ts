import {createAction, props} from '@ngrx/store';

export const crear = createAction(
  '[Counter Component] Crear Todo',
  props<{ texto: string }>());

export const toggle = createAction(
  '[Counter Component] Toggle Todo',
  props<{ id: number }>());

export const editar = createAction(
  '[Counter Component] Editar Todo',
  props<{ id: number, texto: string }>());
