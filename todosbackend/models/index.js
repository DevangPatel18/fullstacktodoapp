const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
module.exports.User = require('./users');
