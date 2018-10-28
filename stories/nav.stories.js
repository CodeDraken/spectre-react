import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import { Nav, Grid } from '../src'

const elements = {
  Default: 'ul',
  div: 'div'
}

storiesOf('Nav', module)
  .add('Default', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col all={8} offset='mx'>
          <Nav renderAs={select('renderAs', elements)}>
            <Nav.Item>
              <a href='#'>Home</a>
            </Nav.Item>

            <Nav.Item active>
              <a href='#'>Documentation</a>
              <Nav>
                <Nav.Item><a href='#'>Cards</a></Nav.Item>
                <Nav.Item><a href='#'>Navbar</a></Nav.Item>
                <Nav.Item><a href='#'>Nav</a></Nav.Item>
                <Nav.Item><a href='#'>Button</a></Nav.Item>
              </Nav>
            </Nav.Item>
          </Nav>

        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
