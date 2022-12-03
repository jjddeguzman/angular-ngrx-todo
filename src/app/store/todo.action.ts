import { Action } from '@ngrx/store';
import { ITodo } from '../interface/model';

// implement action
export interface TodosAction extends Action {
  payload: any;
}

// implement action type
export enum TodosActionType {
  LOAD_TODOS = '[TODOS] LOAD_TODOS',
  LOAD_TODOS_SUCCESS = '[TODOS] LOAD_TODOS_SUCCESS',
}

// create a class for structuring todos
export class LoadTodos implements TodosAction {
  readonly type = TodosActionType.LOAD_TODOS;
  constructor(public payload: null) {}
}

export class LoadTodosSuccess implements TodosAction {
  readonly type = TodosActionType.LOAD_TODOS_SUCCESS;
  constructor(public payload: ITodo[]) {}
}
