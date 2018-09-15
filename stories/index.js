import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Example from '../src/Example'

storiesOf('Example', module)
  .add('with text', () => (
    <Example onClick={action('clicked')}>Hello Example</Example>
  ))
  .add('with some emoji', () => (
    <Example onClick={action('clicked')}><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></Example>
  ))
