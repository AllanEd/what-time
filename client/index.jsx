import React from 'react';
import ReactDOM from 'react-dom';

import reduxStore from '../common/store/reduxStore';

import App from '../common/App';

ReactDOM.render(
  <App store={reduxStore} />,
  document.getElementById('app'),
);
