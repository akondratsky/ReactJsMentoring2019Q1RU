const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(process.env.ENV_MODE);

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
    alias: {
      CommonComponents: path.resolve(__dirname, 'src/components/common'),
      CommonStyles: path.resolve(__dirname, 'src/common-styles/main.scss'),
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      DEBUG: !isProduction,
    }),
    isProduction && new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ].filter(Boolean),

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
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
    ],
  },

  mode,

  optimization: {
    mergeDuplicateChunks: isProduction,
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        cache: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: !isProduction,
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

  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

  watch: !isProduction,
};
