import React from 'react'
import { storiesOf } from '@storybook/react'

import { Popover, Card, CardHeader, Button, Grid } from '../src'

storiesOf('Popover', module)
  .add('Default', () => (
    <Grid.Container>
      <p className='tall p-2 mt-2'>Popovers are small overlay content containers. ( scroll down to see )</p>
      <Grid.Row>
        <Grid.Col all={2} sm={7} offset='mx' className='mt-2'>
          <Popover position='right'>
            <Button>Right Popover</Button>

            <Popover.Container>
              <Card>
                <CardHeader>
                  <CardHeader.Title>Apple</CardHeader.Title>
                  <CardHeader.SubTitle className='text-gray'>
              Software and hardware
                  </CardHeader.SubTitle>
                </CardHeader>
                <Card.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem culpa laudantium quam ducimus.
                </Card.Body>
                <Card.Footer>
                  <Button>Buy</Button>
                </Card.Footer>
              </Card>
            </Popover.Container>
          </Popover>
        </Grid.Col>

        <Grid.Col all={2} sm={7} offset='mx' className='mt-2'>

          <Popover>
            <Button>Default Popover</Button>

            <Popover.Container>
              <Card>
                <CardHeader>
                  <CardHeader.Title>Apple</CardHeader.Title>
                  <CardHeader.SubTitle className='text-gray'>
                  Software and hardware
                  </CardHeader.SubTitle>
                </CardHeader>
                <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem culpa laudantium quam ducimus.
                </Card.Body>
                <Card.Footer>
                  <Button>Buy</Button>
                </Card.Footer>
              </Card>
            </Popover.Container>
          </Popover>
        </Grid.Col>

        <Grid.Col all={2} sm={7} offset='mx' className='mt-2'>
          <Popover position='bottom'>
            <Button>Bottom Popover</Button>

            <Popover.Container>
              <Card>
                <CardHeader>
                  <CardHeader.Title>Apple</CardHeader.Title>
                  <CardHeader.SubTitle className='text-gray'>
              Software and hardware
                  </CardHeader.SubTitle>
                </CardHeader>
                <Card.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem culpa laudantium quam ducimus.
                </Card.Body>
                <Card.Footer>
                  <Button>Buy</Button>
                </Card.Footer>
              </Card>
            </Popover.Container>
          </Popover>
        </Grid.Col>

        <Grid.Col all={2} sm={7} offset='mx' className='mt-2'>
          <Popover position='left'>
            <Button>Left Popover</Button>

            <Popover.Container>
              <Card>
                <CardHeader>
                  <CardHeader.Title>Apple</CardHeader.Title>
                  <CardHeader.SubTitle className='text-gray'>
              Software and hardware
                  </CardHeader.SubTitle>
                </CardHeader>
                <Card.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem culpa laudantium quam ducimus.
                </Card.Body>
                <Card.Footer>
                  <Button>Buy</Button>
                </Card.Footer>
              </Card>
            </Popover.Container>
          </Popover>
        </Grid.Col>

      </Grid.Row>
    </Grid.Container>
  ))
