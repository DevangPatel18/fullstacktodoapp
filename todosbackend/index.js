const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./helpers/error');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const todoRoutes = require('./routes/todos');
const authRoutes = require('./routes/auth');
const userTodoRoutes = require('./routes/userTodos');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/users/:id/todos', userTodoRoutes);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
