import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, removeTodo, toggleTodo } from '../store/actions/userTodos';
import TodoItem from '../TodoItem';

class UserTodos extends Component {
  componentDidMount() {
    const { currentUser } = this.props;
    this.props.fetchTodos(currentUser);
  }
  render() {
    const { userTodo, currentUser } = this.props;
    let userTodoList = userTodo.map(t => (
      <TodoItem
        key={t._id}
        completed={t.completed}
        name={t.name}
        onDelete={this.props.removeTodo.bind(this, currentUser, t._id)}
        onToggle={this.props.toggleTodo.bind(this, currentUser, t._id)}
      />
    ));
    return <ul>{userTodoList}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    userTodo: state.userTodo,
    currentUser: state.currentUser,
  };
}
export default connect(
  mapStateToProps,
  { fetchTodos, removeTodo, toggleTodo }
)(UserTodos);
