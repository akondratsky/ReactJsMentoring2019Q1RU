import { configure, addDecorator, addParameters  } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo({
  header: true,
  inline: true,
  propTables: null, // do not show propTypes
}));

addParameters({
  options: {
    name: 'React JS Mentoring Project Homework',
    url: 'http://localhost:3000/',
  }
});

const req = require.context('../src/stories', true, /.stories.js$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);