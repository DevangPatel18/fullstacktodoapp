const db = require('../models');

exports.getUserTodoList = async function(req, res, next) {
  try {
    const foundUser = await db.User.findById(req.params.id);
    const { todoList } = foundUser;

    db.Todo.find(
      {
        _id: { $in: todoList },
      },
      (_err, docs) => {
        return res.status(200).json(docs);
      }
      );
  } catch (err) {
    return next(err);
  }
};
