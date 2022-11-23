import { createAction, props } from '@ngrx/store';
import { ITodo } from '../interface/model';

// loading todos no data yet
export const loadTodos = createAction('[Todo Page] Load Todos');

// load success with data
export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: ITodo[] }>()
);

// load failed return error message
export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);

// add todo
export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ content: string }>()
);

// remove todo
export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);
