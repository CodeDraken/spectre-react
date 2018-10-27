import React from 'react'
import { shallow } from 'enzyme'

import { NavbarBrand } from '../..'

describe('NavbarBrand', () => {
  it('Should render default .navbar-brand markup', () => {
    const wrapper = shallow(<NavbarBrand />)

    expect(wrapper.type()).toBe('a')
    expect(wrapper.hasClass('navbar-brand')).toBe(true)
    expect(wrapper.prop('href')).toBe('#')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <NavbarBrand>
        Brand
      </NavbarBrand>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<a href="#" class="navbar-brand">Brand</a>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<NavbarBrand className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('navbar-brand')).toBe(true)
  })

  it('Should pass href attribute', () => {
    const wrapper = shallow(<NavbarBrand href='/home' />)

    expect(wrapper.prop('href')).toBe('/home')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<NavbarBrand renderAs='main'>custom</NavbarBrand>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('navbar-brand')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<NavbarBrand />)

    expect(wrapper).toMatchSnapshot()
  })
})
