import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Container, Col, Row, Label, Input } from '../src'

storiesOf('Label', module)
  .add('Default', () => (
    <Label>Default Label</Label>
  ))
  .add('Colors', () => (
    <Container>
      <Row>
        <Col all={10}>
          <Label className='m-2'>Default Label</Label>
          <Label className='m-2' color='primary'>Primary Label</Label>
          <Label className='m-2' color='secondary'>Secondary Label</Label>
          <Label className='m-2' color='success'>Success Label</Label>
          <Label className='m-2' color='warning'>Warning Label</Label>
          <Label className='m-2' color='error'>Error Label</Label>
        </Col>
      </Row>
    </Container>
  ))
