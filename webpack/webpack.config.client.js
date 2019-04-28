const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const mode = process.env.ENV_MODE || 'development';
const isProduction = mode === 'production';


module.exports = merge(commonConfig, {
  name: 'client',

  target: 'web',

  entry: [
    'babel-polyfill',
    !isProduction && 'webpack-hot-middleware/client',
    '../src/client.js',
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    isProduction && new CleanWebpackPlugin(),
    !isProduction && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
