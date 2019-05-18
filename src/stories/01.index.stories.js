import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';

import Content from './content';

storiesOf(Content.ReactJsMentoring._Chapter, module)
    .add(Content.ReactJsMentoring.About, () => (
      <div>
        <h2>Welcome to ReactJS Mentoring Project</h2>
        <p>It's example of storybook that we can use when working on the projects</p>
        <p>Keep calm and read</p>
        <ul>
          <li>
            <LinkTo kind={Content.DummyElements._Chapter} story={Content.DummyElements.SimpleButtons}>
              {Content.DummyElements.SimpleButtons}
            </LinkTo>
          </li>
          <li>
            <LinkTo kind={Content.DummyElements._Chapter} story={Content.DummyElements.LightenedBtns}>
              {Content.DummyElements.LightenedBtns}
            </LinkTo>
          </li>
          <li>
            <LinkTo kind={Content.DummyElements._Chapter} story={Content.DummyElements.BtnsWithWidth}>
              {Content.DummyElements.BtnsWithWidth}
            </LinkTo>
          </li>
        </ul>
      </div>
    ));

