import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, action, select } from '@storybook/addon-knobs'

import {
  FormGroup, Input, Icon, Button,
  Container, Col, Row
} from '../src'

storiesOf('Forms', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Col all={6} xs={12}>
          <form>
            <FormGroup>
              <label className='form-label' htmlFor='input-example-1'>Name</label>
              <Input placeholder='username' id='input-example-1' />
            </FormGroup>

            <FormGroup>
              <label className='form-label' htmlFor='input-example-2'>Password</label>
              <Input type='password' id='input-example-2' placeholder='password' />
            </FormGroup>

            <FormGroup>
              <label className='form-label' htmlFor='input-example-3'>Password</label>
              <Input id='input-example-3' type='email' placeholder='email'
                iconLeft={boolean('iconLeft', true)}
                iconRight={boolean('iconRight', false)}
              >
                <Icon formIcon icon={text('Icon', 'mail')} />
              </Input>
            </FormGroup>

            <Button type='submit'>
            Create Account
              <Icon icon='check' />
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  ))
