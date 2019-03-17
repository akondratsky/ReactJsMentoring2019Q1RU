const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': 'google',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'jsx'
  ],
  'rules': {
    'linebreak-style': [ error, 'windows' ],
    'max-len': [ warn, { 'code': 120 }],
    'react/jsx-uses-react': error,
    'react/jsx-uses-vars': error,
    'object-curly-spacing': [ error, 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
    'require-jsdoc': off,
    'no-invalid-this': off,
  },
};
