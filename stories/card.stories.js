import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Card, CardHeader, Media,
  Container, Row, Col, Button
} from '../src'

storiesOf('Card', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Col all={6} offset='mx'>
          <Card>
            <Card.Image>
              <Media.Image src='https://source.unsplash.com/random' responsive />
            </Card.Image>

            <CardHeader>
              <CardHeader.Title className='h5'>Title</CardHeader.Title>
              <CardHeader.SubTitle className='text-gray'>Subtitle</CardHeader.SubTitle>
            </CardHeader>

            <Card.Body>
            Lorem ipsum dolor sit amet consectetur
            </Card.Body>

            <Card.Footer>
              <Button.Group>
                <Button>Footer</Button>
                <Button>Buttons</Button>
              </Button.Group>
            </Card.Footer>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  ))
