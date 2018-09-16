import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, action, select } from '@storybook/addon-knobs'

import { FormGroup, Input, Icon, Button } from '../src'

storiesOf('Forms', module)
  .add('Default', () => (
    <div className='columns'>
      <div className='column col-6 col-xs-12'>
        <form>
          <FormGroup>
            <label className='form-label' for='input-example-1'>Name</label>
            <Input placeholder='username' id='input-example-1' />
          </FormGroup>

          <FormGroup>
            <label className='form-label' for='input-example-2'>Password</label>
            <Input type='password' id='input-example-2' placeholder='password' />
          </FormGroup>

          <FormGroup>
            <label className='form-label' for='input-example-3'>Password</label>
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
      </div>
    </div>
  ))
