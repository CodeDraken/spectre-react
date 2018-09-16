import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Blockquote } from '../src'

storiesOf('Blockquote', module)
  .add('Default', () => (
    <Blockquote
      text={text('Text', 'Main text of quote')}
      cite={text('Cite', '- Cite')}
    />
  ))
