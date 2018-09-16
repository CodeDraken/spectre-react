import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'

import { Heading } from '../src'

const elements = {
  Default: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
}

storiesOf('Heading', module)
  .add('Default', () => (
    <Heading
      label={text('Label', '')}
      renderAs={select('renderAs', elements)}
    >
      Default Heading
    </Heading>
  ))
  .add('With a Label', () => (
    <Heading
      label={text('Label', 'label')}
      renderAs={select('renderAs', elements)}
    >
      Heading
    </Heading>
  ))
