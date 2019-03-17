const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.ENV_MODE || 'development';
const isProduction = mode == 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.scss'],
  },

  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      DEBUG: !isProduction,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  mode,

  optimization: {
    mergeDuplicateChunks: isProduction ? true : false,
    minimize: isProduction ? true : false,
    minimizer: [
      new TerserPlugin({
        cache: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: isProduction ? false : true,
          },
        },
      }),
    ],
    removeEmptyChunks: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      // minSize: 1024,
      // maxSize: 1024 * 500,
    },
  },

  devServer: {
    hot: true,
    https: false,
    port: 8080,
    proxy: {
      '/api/movies': 'http://localhost:3000',
    },
  },

  devtool: isProduction ? 'source-map' : 'eval',

  watch: isProduction ? false : true,
};
