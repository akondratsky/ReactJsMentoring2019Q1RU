const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  name: 'server',
  target: 'node',
  entry: [
    'babel-polyfill',
    '../src/serverRenderer.js',
  ],
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.scss$|\.jpg$/,
        include: /src/,
        use: [
          {
            loader: 'ignore-loader',
          },
        ],
      },
    ],
  },
});
