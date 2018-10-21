import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'

import { Image, Container, Row, Col } from '../src'

const elements = {
  Default: 'div'
}

storiesOf('Media', module)
  .add('Image', () => (
    <Container>
      <Row>
        <Col all={4} offset='mx'>
          <p>Default Image</p>
          <Image
            renderAs={select('renderAs', elements)}
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
          />

          <p>Responsive Image</p>
          <Image
            renderAs={select('renderAs', elements)}
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
            responsive
          />

          <p>Contain Image</p>
          <Image
            renderAs={select('renderAs', elements)}
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
            contain
          />

          <p>Cover Image</p>
          <Image
            renderAs={select('renderAs', elements)}
            src='https://source.unsplash.com/random/300x300'
            alt='random image'
            cover
          />
        </Col>
      </Row>
    </Container>
  ))
