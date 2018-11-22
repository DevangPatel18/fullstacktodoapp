import { LOAD_TODO, REMOVE_TODO } from '../actionTypes';

const userTodo = (state = [], action) => {
  switch (action.type) {
    case LOAD_TODO:
      return [...action.todos];
    case REMOVE_TODO:
      return state.filter(todo => todo._id !== action.id);
    default:
      return state;
  }
};

export default userTodo;
