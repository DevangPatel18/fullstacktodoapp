import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_TODO, REMOVE_TODO } from '../actionTypes';

export const loadUserTodos = todos => ({
  type: LOAD_TODO,
  todos,
});

export const removeUserTodo = id => ({
  type: REMOVE_TODO,
  id,
});

export const removeTodo = (currentUser, toDoId) => {
  const userId = currentUser.user.id;
  return dispatch => {
    return apiCall('delete', `/api/users/${userId}/todos/${toDoId}`)
      .then(() => dispatch(removeUserTodo(toDoId)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const fetchTodos = currentUser => {
  const userId = currentUser.user.id || currentUser.user._id;
  return dispatch => {
    return apiCall('get', `/api/users/${userId}/todoList`)
      .then(res => dispatch(loadUserTodos(res)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const postNewTodo = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const userId = currentUser.user.id;
  return apiCall('post', `/api/users/${userId}/todos`, { text })
    .then(res => dispatch(fetchTodos(res)))
    .catch(err => dispatch(addError(err.message)));
};

export const toggleTodo = (currentUser, toDoId) => {
  const userId = currentUser.user.id;
  return dispatch => {
    return apiCall('put', `/api/users/${userId}/todos/${toDoId}`)
      .then(res => dispatch(fetchTodos(currentUser)))
      .catch(err => dispatch(addError(err.message)));
  };
};
