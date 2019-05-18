import React from 'react';
import Content from './content';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { DummyButton } from 'CommonComponents/DummyButton';

const stories = storiesOf(Content.Examples._Chapter, module);

stories.add(
    Content.Examples.Markdown,
    () => (
      <p>This is example of page with markdown in 'info'</p>
    ),
    { info: {
      inline: true,
      header: false,
      source: false, // do not display source of code of STORY
      text: `
      This is markdown text.

      # This is header

      ## this is second level header

      *Bam!*

      **Bam!!**

      ~~ Вжух! ~~

      [Название места куда послать](https://www.google.com/)


      `,
    }}
);

stories.addDecorator(withKnobs);

stories.add('DummyButton with knobs', () => {
  const labelText = text('Label', 'Press me');
  const isActive = boolean('Active', true);
  const isLightened = boolean('Lightened', false);
  const width = number('Width, px: ', 100, {
    range: true,
    min: 8,
    max: 1024,
    step: 8,
  });

  return (
    <DummyButton text={labelText} isActive={isActive} isLight={isLightened} width={width} />
  );
});
