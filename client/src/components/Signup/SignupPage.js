import React from 'react';
import PropTypes from 'prop-types';
import Signup from './Signup';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        agree: '',
      }
    };

    this.handleForm = this.handleForm.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
  }

  handleForm(event) {
    event.preventDefault();
    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
    console.log('agree:', this.state.user.agree);
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
      <Signup
        onSubmit={this.handleForm}
        onChange={this.getUserInput}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignupPage;
