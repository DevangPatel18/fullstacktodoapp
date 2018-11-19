import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import TodoList from '../TodoList';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <TodoList />
      </div>
    </Router>
  </Provider>
);

export default App;
