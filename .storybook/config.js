import { configure, addDecorator, addParameters  } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';



// configuring @storybook/addon-viewport:
const VIEWPORTS = {
  ...INITIAL_VIEWPORTS,

  desktop: {
    name: 'Desktop',
    styles: {
      width: '97%',
      height: '100%',
    },
    type: 'desktop'
  },
};

addParameters({
  viewport: {
    defaultViewport: 'responsive',
    viewports: VIEWPORTS,
  },
});


//configuring @storybook/addon-options:
addParameters({
  options: {
    name: 'React JS Mentoring Project Homework',
    url: 'http://localhost:3000/',
  }}
);



// configuring addon:
addDecorator(withInfo({
  header: true,
  inline: true,
  propTables: null, // do not show propTypes
}));

// load stories from files:

const req = require.context('../src/stories', true, /.stories.js$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);