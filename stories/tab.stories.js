import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tab, TabMenu, Grid } from '../src'

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
  .add('Custom / Controlled', () => {
    const MyTabs = () => (
      <div>
        <TabMenu block>
          <TabMenu.Item
            active
            onClick={() => window.alert('clicked 1')}
          >
            <a className='btn btn-link'>Active</a>
          </TabMenu.Item>
          <TabMenu.Item
            onClick={() => window.alert('clicked 2')}
          >
            <a className='btn btn-link'>Another Tab</a>
          </TabMenu.Item>
        </TabMenu>

        <div>
          Tab Pane
          <p>You would manually control what shows here and the switching between tabs. ( see the default story for an easier way to use it )</p>
        </div>
      </div>
    )

    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col all={10} offset='mx'>

            <MyTabs />

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    )
  })
