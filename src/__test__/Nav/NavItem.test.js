import React from 'react'
import { shallow } from 'enzyme'

import { NavItem } from '../..'

describe('NavItem', () => {
  it('Should render default .nav-item markup', () => {
    const wrapper = shallow(<NavItem />)

    expect(wrapper.type()).toBe('li')
    expect(wrapper.hasClass('nav-item')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <NavItem>
        <p>hello world</p>
      </NavItem>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<NavItem className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('nav-item')).toBe(true)
  })

  it('Should have .active class', () => {
    const wrapper = shallow(<NavItem active />)

    expect(wrapper.hasClass('active')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<NavItem renderAs='main'>custom</NavItem>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('nav-item')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<NavItem />)

    expect(wrapper).toMatchSnapshot()
  })
})
