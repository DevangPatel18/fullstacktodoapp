const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createUserTodo,
  getUserTodo,
  deleteUserTodo,
} = require('../helpers/userTodos');

// prefix - /api/users/
router.route('/').post(createUserTodo);

router
  .route('/:id')
  .get(getUserTodo)
  .delete(deleteUserTodo);

module.exports = router;
