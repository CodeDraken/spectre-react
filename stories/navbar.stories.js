import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'

import { Navbar, Button, Row, Col, Container } from '../src'

const elements = {
  Default: 'nav',
  'div': 'div',
  'header': 'header'
}

storiesOf('Navbar', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Col all={10} offset='mx'>
          <Navbar renderAs={select('renderAs', elements)}>
            <Navbar.Section>
              <Navbar.Brand>Brand</Navbar.Brand>
            </Navbar.Section>

            <Navbar.Section centered>
              <Button link>\ ( ^ _ ^ ) /</Button>
            </Navbar.Section>

            <Navbar.Section>
              <Button link>About</Button>
              <Button link>Documentation</Button>
              <Button link>GitHub</Button>
            </Navbar.Section>
          </Navbar>
        </Col>
      </Row>
    </Container>
  ))
