import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.handleForm = this.handleForm.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
  }

  handleForm(event) {
    event.preventDefault();
    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }

  getUserInput(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <Login
        onSubmit={this.handleForm}
        onChange={this.getUserInput}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
