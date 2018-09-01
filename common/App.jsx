import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Routes from './Routes';

const App = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;
