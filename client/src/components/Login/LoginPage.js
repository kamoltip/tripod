import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import API from '../../utils/API';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      userPin: ''
    };

    this.handleForm = this.handleForm.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
  }

  handleForm(event) {
    event.preventDefault();
    const input = {
      'username': this.state.user.email,
      'password': this.state.user.password,

    }
      API.loginUser(input)
      .then(res => this.setState({'userPin': res.data }))

      .catch(err => console.log(err));
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
        pin={this.state.userPin}
      />
    );
  }

}

export default LoginPage;
