const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const mode = process.env.ENV_MODE || 'development';
const isProduction = mode === 'production';

module.exports = merge(commonConfig, {
  entry: [
    !isProduction && 'webpack-hot-middleware/client',
  ],
  plugins: [
    isProduction && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    !isProduction && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
