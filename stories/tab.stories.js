import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tab, Grid } from '../src'

storiesOf('Tab', module)
  .add('Default', () => {
    const panes = [
      { menuContent: 'Tab 1', render: () => <div>Tab 1 Content</div> },
      { menuContent: 'Tab 2', render: () => <div>Tab 2 Content</div> },
      { menuContent: 'Tab 3', render: () => <div>Tab 3 Content</div> }
    ]
    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col all={10} offset='mx'>
            <Tab block panes={panes}>
              Default Tab
            </Tab>

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    )
  })
