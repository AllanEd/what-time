import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import isEmail from 'validator/lib/isEmail';

import * as Actions from '../actions/loginActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
    this.state = {
      name: '',
      password: '',
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

  userLogin(event) {
    event.preventDefault();

    const { login } = this.props;
    const { name, password } = this.state;
    login(name, password);
  }

  isValidEmail() {
    const { name } = this.state;
    return isEmail(name);
  }

  render() {
    const { name, password } = this.state;

    return (
      <form onSubmit={this.userLogin}>
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

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = dispatch => ({
  login: (name, password) => {
    dispatch(Actions.login(name, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
