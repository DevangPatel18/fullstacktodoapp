import React, { Component } from 'react';
// import errors from '../store/reducers/errors';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? 'signup' : 'signin';
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
        console.log('LOGGED IN!');
      })
      .catch(() => {
        return;
      });
  };

  render() {
    const { email, username, password } = this.state;
    const {
      heading,
      buttonText,
      signUp,
      errors,
      removeError,
      history,
    } = this.props;
    history.listen(() => {
      removeError();
    });
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}
              <label htmlFor="email">Email</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                type="text"
              />
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                type="password"
              />
              {signUp && (
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    type="text"
                  />
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
