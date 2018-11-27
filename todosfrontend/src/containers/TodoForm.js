import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewTodo } from '../store/actions/userTodos';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTodo: '',
    };
  }

  handleNewTodo = event => {
    event.preventDefault();
    this.props.postNewTodo(this.state.userTodo);
    this.setState({ userTodo: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleNewTodo}>
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
        <input
          type="text"
          className="form-control"
          value={this.state.userTodo}
          onChange={e => this.setState({ userTodo: e.target.value })}
        />
        <button type="submit" className="btn btn-success pull-right">
          Add Todo
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(
  mapStateToProps,
  { postNewTodo }
)(TodoForm);
