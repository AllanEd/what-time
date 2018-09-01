import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../../webpack.config.dev';

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
