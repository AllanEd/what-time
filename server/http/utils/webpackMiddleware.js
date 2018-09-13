import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import configFactory from '../../../webpack.config.dev';

const config = configFactory.create(process.env);

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
