import React from 'react';
import Content from './content';
import { storiesOf } from '@storybook/react';

storiesOf(Content.Examples._Chapter, module)
    .add(
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
