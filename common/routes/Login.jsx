import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import LoginPage from '../containers/LoginPage';

const authenticate = isUserLoggedIn => (isUserLoggedIn ? <Redirect to="/users" /> : <Route component={LoginPage} />);

const Users = props => (
  <Route
    {...props}
    render={() => authenticate(props.isUserLoggedIn)}
  />
);

Users.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default Users;
