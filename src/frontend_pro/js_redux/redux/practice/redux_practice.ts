import omit from 'lodash';
import { createStore } from 'redux';
import { Task } from './actions';

type Action = {
  type: Task;
  payload: any;
};

/// ///////////////////////////////////////////////////
/// ////////////// First Solution /////////////////////
/// ///////////////////////////////////////////////////
const generateStore = (data: any) => {
  const reducer = (state = data, action: Action) => {
    if (state === undefined) {
      return {};
    }
    switch (action.type) {
      case 'TASK_ADD':
        return {
          ...state,
          [action.payload?.task.id]: action.payload?.task,
        };
      case 'TASK_REMOVE':
        return {
          ...omit(state, action.payload.id),
        };
      default:
        return state;
    }
  };
  const store = createStore(reducer);
  return store;
};

export default generateStore;

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
  const tasks = (state = {}, action: Action) => {
    switch (action.type) {
      case 'TASK_ADD': {
        const { task } = action.payload;
        return { ...state, [task.id]: task };
      }
      case 'TASK_REMOVE': {
        const { id } = action.payload;
        return omit(state, id);
      }
      default:
        return state;
    }
  };

  const generateStore = (initState: any) => createStore(tasks, initState);
}
