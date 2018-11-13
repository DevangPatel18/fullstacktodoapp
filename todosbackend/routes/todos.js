import express from 'express';

const router = express.Router();
const db = require('../models');
import helpers from '../helpers/todos';

router
  .route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

router
  .route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);

module.exports = router;
