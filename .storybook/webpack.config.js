const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'CommonComponents': path.resolve(__dirname, '../src/components/common'),
      'CommonStyles': path.resolve(__dirname, '../src/common-styles/main.scss'),
      'Common': path.resolve(__dirname, '../src/common'),
      'Src': path.resolve(__dirname, '../src'),
      'Store': path.resolve(__dirname, '../src/store'),
      'Actions': path.resolve(__dirname, '../src/store/actions'),
      'Reducers': path.resolve(__dirname, '../src/store/reducers'),
      'Mocks': path.resolve(__dirname, '../src/__mocks__'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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

}