import { LOAD_TODO, REMOVE_TODO } from '../actionTypes';

const userTodo = (state = [], action) => {
  switch (action.type) {
    case LOAD_TODO:
      return [...action.todos];
    default:
      return state;
  }
};

export default userTodo;
