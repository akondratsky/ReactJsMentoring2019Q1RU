import { configure } from '@storybook/react';

const req = require.context('../src/stories', true, /.stories.js$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);