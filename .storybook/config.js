import { configure, addDecorator  } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo({
  header: true,
  inline: true,
  propTables: null, // do not show propTypes
}));

const req = require.context('../src/stories', true, /.stories.js$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);