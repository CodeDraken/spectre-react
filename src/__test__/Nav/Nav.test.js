import React from 'react'
import { shallow } from 'enzyme'

import { Nav } from '../..'

describe('Nav', () => {
  it('Should render default .nav markup', () => {
    const wrapper = shallow(<Nav />)

    expect(wrapper.type()).toBe('ul')
    expect(wrapper.hasClass('nav')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Nav>
        <p>hello world</p>
      </Nav>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Nav className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('nav')).toBe(true)
  })

  it('Should have Nav.Item component', () => {
    expect(Nav.Item).toBeDefined()
    expect(typeof Nav.Item).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Nav renderAs='main'>custom</Nav>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('nav')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Nav />)

    expect(wrapper).toMatchSnapshot()
  })
})
