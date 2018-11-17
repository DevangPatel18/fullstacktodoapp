const express = require('express');
const router = express.Router({ mergeParams: true });
const { getUserTodoList } = require('../helpers/userTodoList');

router.route('/').get(getUserTodoList);

module.exports = router;
