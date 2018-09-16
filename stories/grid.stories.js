import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import {
  Container, Col, Row
} from '../src'

storiesOf('Grid', module)
  .add('Default', () => (
    <Container>
      <Row className='mt-2'>
        <Col className='bg-secondary' all={12}>col-12</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary' all={9}>col-9</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary' all={6}>col-6</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary' all={3}>col-3</Col>
      </Row>
    </Container>
  ))
  .add('Gap / Gapless', () => (
    <Container>
      <Row gapless>
        <Col all={6}>col-6 gapless</Col>
        <Col all={6}>col-6 gapless</Col>
      </Row>
      <Row className='mt-2'>
        <Col all={6}>col-6 gap</Col>
        <Col all={6}>col-6 gap</Col>
      </Row>
    </Container>
  ))
  .add('Offsets', () => (
    <Container>
      <Row className='mt-2'>
        <Col className='bg-secondary pad' all={2}>col-2</Col>
        <Col className='bg-secondary pad' all={4} offset='mx'>col-4 col-mx-auto</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary pad' all={2}>col-2</Col>
        <Col className='bg-secondary pad' all={4} offset='ml'>col-4 col-ml-auto</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary pad' all={4} offset='ml'>col-4 col-ml-auto</Col>
        <Col className='bg-secondary pad' all={2}>col-2</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary pad' all={4} offset='mx'>col-4 col-mx-auto</Col>
        <Col className='bg-secondary pad' all={2}>col-2</Col>
      </Row>

      <Row className='mt-2'>
        <Col className='bg-secondary pad' all={4} offset='mr'>col-4 col-mr-auto</Col>
        <Col className='bg-secondary pad' all={2}>col-2</Col>
      </Row>
      <Row className='mt-2'>
        <Col className='bg-secondary pad' all={4} offset='mx'>col-4 col-mx-auto</Col>
      </Row>
    </Container>
  ))
