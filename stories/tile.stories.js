import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tile, Icon, Grid, Button, Media } from '../src'

storiesOf('Tile', module)
  .add('Default', () => (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col md={10} all={6} offset='mx'>
          <Tile>
            <Tile.Icon>
              <Media.Figure className='avatar avatar-lg'>
                <Media.Image
                  src='https://picturepan2.github.io/spectre/img/avatar-3.png'
                  alt='Avatar' />
              </Media.Figure>
            </Tile.Icon>

            <Tile.Content>
              <Tile.Title>sed ut incidunt</Tile.Title>
              <Tile.Subtitle className='text-gray'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              </Tile.Subtitle>
            </Tile.Content>

            <Tile.Action>
              <Button.Group>
                <Button small primary>Read More</Button>
                <Button small>Bookmark</Button>
              </Button.Group>
            </Tile.Action>
          </Tile>

          <Tile>
            <Tile.Icon>
              <Media.Figure className='avatar avatar-lg'>
                <Media.Image
                  src='https://picturepan2.github.io/spectre/img/avatar-2.png'
                  alt='Avatar' />
              </Media.Figure>
            </Tile.Icon>

            <Tile.Content>
              <Tile.Title>Default Tile</Tile.Title>
              <Tile.Subtitle className='text-gray'>a subtitle</Tile.Subtitle>
              <Button.Group>
                <Button small primary>Read More</Button>
                <Button small>Bookmark</Button>
              </Button.Group>
            </Tile.Content>
          </Tile>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
