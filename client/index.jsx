import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import { Provider } from 'react-redux';

import store from '../common/store/configureStore';

import history from '../common/history';
import routes from '../common/routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app'),
);
