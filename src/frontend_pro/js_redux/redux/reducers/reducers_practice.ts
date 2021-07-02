import _ from 'lodash';
import { combineReducers } from 'redux';

import { Task, Comment } from './actions';

type Action = {
 type: string;
 payload: Task | Comment;
};

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////

const comments = (state: any = {}, action: Action) => {
 switch (action.type) {
  case 'TASK_COMMENT_ADD':
   const { comment } = action.payload;
   return {
    ...state,
    [comment.id]: action.payload,
   };
  case 'TASK_COMMENT_REMOVE':
   return _.omit(state, action.payload.id);
  case 'TASK_REMOVE':
   const { id } = action.payload;
   return _.omitBy(state, (c: Comment) => c.taskId === id);
  default:
   return state;
 }
};

const tasks = (state = {}, action: Action) => {
 switch (action.type) {
  case 'TASK_ADD':
   const { task } = action.payload;
   return {
    ...state,
    [task.id]: task,
   };
  case 'TASK_REMOVE':
   const { id } = action.payload;
   return _.omit(state, id);
  default:
   return state;
 }
};

export default combineReducers({ comments, tasks });

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

const commentsMaster = (state: any = {}, action: Action) => {
 switch (action.type) {
  case 'TASK_COMMENT_ADD': {
   const { comment } = action.payload;
   return { ...state, [comment.id]: comment };
  }
  case 'TASK_COMMENT_REMOVE': {
   return _.omit(state, action.payload.id);
  }
  case 'TASK_REMOVE': {
   const { id } = action.payload;
   return _.omitBy(state, (c) => c.taskId === id);
  }
  default:
   return state;
 }
};

const tasksMaster = (state = {}, action: Action) => {
 switch (action.type) {
  case 'TASK_ADD': {
   const { task } = action.payload;
   return { ...state, [task.id]: task };
  }
  case 'TASK_REMOVE': {
   const { id } = action.payload;
   return _.omit(state, id);
  }
  default:
   return state;
 }
};
