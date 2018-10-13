import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { Container } from '../'

describe('Container', () => {
  it('Should render default .container markup', () => {
    const wrapper = shallow(<Container />)

    expect(wrapper.html()).toBe('<div class="container"></div>')
  })

  describe('Snapshots', () => {
    it('Should exist', () => {
      expect(shallow(<Container />)).toMatchSnapshot()
    })
  })
})
