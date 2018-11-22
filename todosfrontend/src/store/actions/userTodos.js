import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_TODO, REMOVE_TODO } from '../actionTypes';

export const loadUserTodos = todos => ({
  type: LOAD_TODO,
  todos,
});

export const fetchTodos = currentUser => {
  const { id } = currentUser.user;
  return dispatch => {
    return apiCall('get', `/api/users/${id}/todoList`)
      .then(function(res) {
        dispatch(loadUserTodos(res));
      })
      .catch(err => dispatch(addError(err.message)));
  };
};
