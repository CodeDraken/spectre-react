import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tab, Grid } from '../src'

storiesOf('Tab', module)
  .add('Default', () => {
    const MyComponent = () => <div>Custom Content</div>

    const panes = [
      { menuContent: 'Tab 1', render: () => <div>Basic Tab Item</div> },
      {
        menuContent: <a className='btn btn-link text-error'>Custom menu item</a>,
        render: MyComponent
      },
      { render: () => <div>Defaults to Tab i+1 if no label supplied</div> }
    ]

    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col all={10} offset='mx'>

            <Tab block panes={panes} />

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    )
  })
