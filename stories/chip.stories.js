import React from 'react'
import { storiesOf } from '@storybook/react'

import { Chip } from '../src'

storiesOf('Chip', module)
  .add('Default', () => (
    <Chip>
      Default Chip
    </Chip>
  ))
