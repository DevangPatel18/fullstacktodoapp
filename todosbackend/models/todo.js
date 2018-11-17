const mongoose = require('mongoose');
const User = require('./users');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

todoSchema.pre('remove', async function(next) {
  try {
    let user = await User.findById(this.user);
    user.todoList.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

const Todo = (module.exports = mongoose.model('Todo', todoSchema));
