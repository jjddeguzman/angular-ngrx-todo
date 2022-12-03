import { ITodo } from '../interface/model';
import { TodosAction } from './todo.action';

export interface State {
  isLoading: boolean;
  todosResponse: ITodo;
}

export const INITIAL_STATE: State = {
  isLoading: undefined,
  todosResponse: undefined,
};

export function reducer(state: State = INITIAL_STATE, action: TodosAction) {
  const finalizedState: State = state || INITIAL_STATE;

  // switch(action.type){
  //   case TodosActionType.LOAD_TODOS
  // }
}
