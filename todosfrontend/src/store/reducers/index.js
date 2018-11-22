import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import userTodo from './userTodo';

const rootReducer = combineReducers({
  currentUser,
  errors,
  userTodo,
});

export default rootReducer;
