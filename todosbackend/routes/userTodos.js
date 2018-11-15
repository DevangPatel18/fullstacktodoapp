const express = require('express');
const router = express.Router({ mergeParams: true });
const { createUserTodo } = require('../helpers/userTodos');

// prefix - /api/users/
router.route('/').post(createUserTodo);

module.exports = router;
