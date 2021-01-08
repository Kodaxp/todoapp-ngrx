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

export const borrar = createAction(
  '[Counter Component] Borrar Todo',
  props<{ id: number }>());

export const toggleAll = createAction(
  '[Counter Component] Toggle All Todo',
  props<{ completado: boolean }>());
