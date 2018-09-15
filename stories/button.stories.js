import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button } from '../src'

storiesOf('Button', module)
  .add('Default', () => (
    <Button
      primary={boolean('Primary', false)}
      link={boolean('Link', false)}

      success={boolean('Success', false)}
      error={boolean('Error', false)}

      block={boolean('Block', false)}
      small={boolean('Small', false)}
      large={boolean('Large', false)}
      action={boolean('Action', false)}
      circle={boolean('Circle', false)}

      active={boolean('Active', false)}
      loading={boolean('Loading', false)}
      disabled={boolean('Disabled', false)}

      href={text('href attribute', '')}
      onClick={action('Button Click')}
    >
      Default Button
    </Button>
  ))
  .add('As another React element', () => {
    const CustomComponent = ({
      customProp,
      children,
      className
    }) => (
      <a className={className} href={customProp}>
        {children}
      </a>
    )

    return (
      <div>
        <Button
          tag={CustomComponent}
          primary
          customProp='github.com'>
            Button rendered using another React Component with props
        </Button>
      </div>
    )
  })
