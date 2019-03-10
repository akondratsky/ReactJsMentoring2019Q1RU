import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.js';

const Title = React.createElement(
  'h2',
  {
    className: 'title'
  },
  'Element created with React.createElement()'
)

ReactDOM.render(Title, document.getElementById('task1-create-element'));
ReactDOM.render(<App/>, document.getElementById('task2-component'));