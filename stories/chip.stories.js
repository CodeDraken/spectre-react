import React from 'react'
import { storiesOf } from '@storybook/react'

import { Chip, Grid, Avatar } from '../src'

storiesOf('Chip', module)
  .add('Default', () => (
    <Grid.Container>
      <p className='tall' />
      <Grid.Row>
        <Grid.Col all={8}>

          <Chip>
            Default Chip
          </Chip>

          <Chip>
            Mystery
            <a className='btn btn-clear' href='#' aria-label='Close;' role='button' />
          </Chip>

          <Chip>
            <Avatar initials='TS' />
            Tony Stark
          </Chip>

        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ))
