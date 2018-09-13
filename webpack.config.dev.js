const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const create = (env) => {
  const envKeys = Object.keys(env).reduce((prev, next) => {
    const envKey = prev;
    envKey[`process.env.${next}`] = JSON.stringify(env[next]);
    return envKey;
  }, {});

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, 'client/index.jsx'),
    ],
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: 'main.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
        },
        {
          test: /\.css$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};

export default { create };
