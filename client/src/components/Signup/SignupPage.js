import React from 'react';
import PropTypes from 'prop-types';
import Signup from './Signup';
import API from '../../utils/API'

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        agree: '',
        session: '',
      }
    };

    this.handleForm = this.handleForm.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
  }

  handleForm(event) {
    event.preventDefault();
    const input = {
      'email': this.state.user.email,
      'password': this.state.user.password,
      'agree': this.state.user.agree,
    }
      API.registerUser(input)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
    };

  getUserInput(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  };

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
