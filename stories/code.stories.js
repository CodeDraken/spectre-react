import React from 'react'
import { storiesOf } from '@storybook/react'

import { Code } from '../src'

storiesOf('Code', module)
  .add('Default', () => (
    <div>
      The <Code>someCode()</Code> function tests if code renders inline.
    </div>
  ))
  .add('Multi-line', () => (
    <Code language='javascript' multi>
      {`
      // Multi-line code
      constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }
      `}
    </Code>
  ))
