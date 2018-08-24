const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../../webpack.config.dev.js');

const compiler = webpack(config);

const dev = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
});
const hot = webpackHotMiddleware(compiler);

module.exports = {
  dev,
  hot,
};
