import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Root from './routes/Root';

import './scss/main.scss';
import 'normalize.css';

const App = ({ store }) => (
  <Provider store={store}>
    <Root />
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;
