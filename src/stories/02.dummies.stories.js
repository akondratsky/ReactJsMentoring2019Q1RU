import React from 'react';

import Content from './content';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';


import { DummyButton } from 'CommonComponents/DummyButton';

storiesOf(Content.DummyElements._Chapter)
    .add(
        Content.DummyElements.About,
        () => (
          <div>
            <h1>Some information about dummy buttons</h1>
            <p>
              As you can see this pretty buttons works with information and actually you need just to show some
              examples and... It's a kind of magic. Of course, it's doesn't work so easy as we want. Anyway, I found it
              very and very cool.
            </p>
            <p>
              P.S. This is the only page with disabled 'info' addon.
            </p>
          </div>
        ),
        { info: { disable: true }}
    )
    .add(Content.DummyElements.SimpleButtons, () => (
      <div>
        <DummyButton text='Inactive button' isActive={false} />
        <DummyButton text='Active button' isActive={true} />
      </div>
    ))
    .add(Content.DummyElements.LightenedBtns, () => (
      <div>
        <DummyButton text='Inactive button' isActive={false} isLight={true} />
        <DummyButton text='Active button' isActive={true} isLight={true} />
      </div>
    ))
    .add(Content.DummyElements.BtnsWithWidth, () => (
      <DummyButton text='Button with width (in pixels)' width={400} />
    ));
