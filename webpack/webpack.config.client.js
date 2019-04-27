const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const mode = process.env.ENV_MODE || 'development';
const isProduction = mode === 'production';

if (isProduction) {
  console.info('PRODUCTION MODE ENABLED');
}

const entries = ['../src/client.js'];
if (!isProduction) {
  entries.push('webpack-hot-middleware/client');
}


module.exports = merge(commonConfig, {
  target: 'web',

  entry: [
    !isProduction && 'webpack-hot-middleware/client',
    '../src/client.js',
  ].filter(Boolean),

  plugins: [
    isProduction && new CleanWebpackPlugin(),
    !isProduction && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
