import React from 'react';

import isEmail from 'validator/lib/isEmail';
import rest from '../helper/rest';


class LoginPage extends React.Component {
  constructor() {
    super();
    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.login = this.login.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
    this.state = {
      name: null,
      password: null,
    };
  }

  onNameChange(event) {
    const name = event.target.value;
    this.setState({
      name,
    });
  }

  onPasswordChange(event) {
    const password = event.target.value;
    this.setState({
      password,
    });
  }

  async login(event) {
    event.preventDefault();
    const response = await rest.post('http://localhost:9000/users/login', this.state);
    console.log(response);
  }

  isValidEmail() {
    const { name } = this.state;
    return isEmail(name);
  }

  render() {
    const { name, password } = this.state;

    return (
      <form onSubmit={this.login}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={this.onNameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onPasswordChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginPage;
