import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import AppointmentsPage from '../containers/AppointmentsPage';
import NewAppointmentPage from '../containers/newAppointmentPage';

const routes = path => (
  <Switch>
    <Redirect exact from="/users" to={`${path}/appointments`} />
    <Route exact path={`${path}/appointments`} component={AppointmentsPage} />
    <Route path={`${path}/appointments/new`} component={NewAppointmentPage} />
  </Switch>
);

const redirectToLogin = <Redirect to="/" />;

const authenticate = (path, isUserLoggedIn) => (isUserLoggedIn ? routes(path) : redirectToLogin);

const Users = ({ path, isUserLoggedIn }) => (
  <Route
    path={path}
    render={() => authenticate(path, isUserLoggedIn)}
  />
);

Users.propTypes = {
  path: PropTypes.string.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default Users;
