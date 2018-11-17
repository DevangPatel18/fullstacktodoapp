const db = require('../models');

exports.createUserTodo = async function(req, res, next) {
  try {
    let todo = await db.Todo.create({
      name: req.body.text,
      user: req.params.id,
    });

    let foundUser = await db.User.findById(req.params.id);
    foundUser.todoList.push(todo._id);
    await foundUser.save();
    let foundTodo = await db.Todo.findById(todo._id).populate('user', {
      username: true,
    });
    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};

exports.getUserTodo = async function(req, res, next) {
  try {
    let userTodo = await db.Todo.findById(req.params.id);
    return res.status(200).json(userTodo);
  } catch (err) {
    return next(err);
  }
};

exports.deleteUserTodo = async function(req, res, next) {
  try {
    let foundTodo = await db.Todo.findById(req.params.id);
    await foundTodo.remove();
    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};
