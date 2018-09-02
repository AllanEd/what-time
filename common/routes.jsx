import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reduxStore from './store/reduxStore';

import LoginPage from './containers/LoginPage';
import AppointmentsPage from './containers/AppointmentsPage';

import './scss/main.scss';
import 'normalize.css';

const { login } = reduxStore.getState();
const isUserLoggedIn = login !== null;

const Routes = () => (
  <Router>
    <Route
      exact
      path="/"
      render={() => (
        isUserLoggedIn ? (
          <Route path="/" component={AppointmentsPage} />
        ) : (
          <Route path="/" component={LoginPage} />
        )
      )}
    />
  </Router>
);

export default Routes;
