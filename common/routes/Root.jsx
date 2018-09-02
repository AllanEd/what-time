import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Users from './Users';

import reduxStore from '../store/reduxStore';

const { login } = reduxStore.getState();
const isUserLoggedIn = login !== null;

const Routes = () => (
  <Router>
    <div>
      <Login exact path="/" isUserLoggedIn={isUserLoggedIn} />
      <Users path="/users" isUserLoggedIn={isUserLoggedIn} />
    </div>
  </Router>
);

export default Routes;
