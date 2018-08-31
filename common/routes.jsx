import React from 'react';
import { Route } from 'react-router';

import store from './store/configureStore';

import LoginPage from './containers/LoginPage';
import AppointmentsPage from './containers/AppointmentsPage';

import './scss/main.scss';
import 'normalize.css';

const { login } = store.getState();
const isUserLoggedIn = login !== null;

export default (
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
);
