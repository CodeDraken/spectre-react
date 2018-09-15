import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from '..'

describe('Button', () => {
  it('Should render children', () => {
    const wrapper = shallow(<Button>Hello world</Button>)

    expect(wrapper.text()).toBe('Hello world')
  })
})
