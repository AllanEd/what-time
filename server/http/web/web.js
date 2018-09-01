import express from 'express';
import bodyParser from 'body-parser';

import rootRoute from './routes/root';

import webpackMiddleware from '../utils/webpackMiddleware';

const web = express();
web.use(bodyParser.urlencoded({ extended: true }));
web.use(bodyParser.json());

const root = rootRoute.create();

web.use(webpackMiddleware.dev);
web.use(webpackMiddleware.hot);

web.get('*', root);

export default web;
