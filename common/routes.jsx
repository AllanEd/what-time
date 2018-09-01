import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';

import reduxStore from './store/reduxStore';

import LoginPage from './containers/LoginPage';
import AppointmentsPage from './containers/AppointmentsPage';

import './scss/main.scss';
import 'normalize.css';

const history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();

const { login } = reduxStore.getState();
const isUserLoggedIn = login !== null;

const Routes = () => (
  <Router history={history}>
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
