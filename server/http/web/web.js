const express = require('express');
const bodyParser = require('body-parser');

const rootRoute = require('./routes/root');

const webpackMiddleware = require('../utils/webpackMiddleware');

const web = express();
web.use(bodyParser.urlencoded({ extended: true }));
web.use(bodyParser.json());

module.exports = () => {
  const root = rootRoute.create();

  web.use(webpackMiddleware.dev);
  web.use(webpackMiddleware.hot);

  web.get('*', root);

  return web;
};
