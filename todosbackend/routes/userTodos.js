const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createUserTodo,
  getUserTodo,
  deleteUserTodo,
  toggleUserTodo,
} = require('../helpers/userTodos');

// prefix - /api/users/
router.route('/').post(createUserTodo);

router
  .route('/:id')
  .get(getUserTodo)
  .delete(deleteUserTodo)
  .put(toggleUserTodo);

module.exports = router;
