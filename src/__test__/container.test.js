import React from 'react'
import { shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'

import { Container } from '../'

describe('Container', () => {
  it('Should render default .container markup', () => {
    const wrapper = shallow(<Container />)

    expect(wrapper.html()).toBe('<div class="container"></div>')
  })

  describe('Snapshots', () => {
    it('Should exist', () => {
      const wrapper = shallow(<Container />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
