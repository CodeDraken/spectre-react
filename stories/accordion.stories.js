import React from 'react'
import { storiesOf } from '@storybook/react'

import { Accordion, Grid, Icon } from '../src'

storiesOf('Accordion', module)
  .add('Default', () => (
    <Grid.Container>
      <Accordion>
        <Accordion.Header id='accordion-1'>
          Toggle
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </Accordion.Body>
      </Accordion>
    </Grid.Container>
  ))
  .add('Radio style', () => (
    <Grid.Container>
      <Accordion>
        <Accordion.Header id='accordion-2' type='radio'>
          <Icon icon='arrow-right' />
          Toggle Radio
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </Accordion.Body>
      </Accordion>

      <Accordion>
        <Accordion.Header id='accordion-3' type='radio'>
          <Icon icon='arrow-right' />
          Toggle Radio 2
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </Accordion.Body>
      </Accordion>
    </Grid.Container>
  ))
