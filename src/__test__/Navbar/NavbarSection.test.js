import React from 'react'
import { shallow } from 'enzyme'

import { NavbarSection } from '../..'

describe('NavbarSection', () => {
  it('Should render default .navbar-section markup', () => {
    const wrapper = shallow(<NavbarSection />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('navbar-section')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <NavbarSection>
        <p>hello world</p>
      </NavbarSection>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<div class="navbar-section"><p>hello world</p></div>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<NavbarSection className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('navbar-section')).toBe(true)
  })

  it('Should render .navbar-center and not .navbar-section', () => {
    const wrapper = shallow(<NavbarSection center />)

    expect(wrapper.hasClass('navbar-section')).toBe(false)
    expect(wrapper.hasClass('navbar-center')).toBe(true)
  })

  it('Should render .navbar-section and not .navbar-center', () => {
    const wrapper = shallow(<NavbarSection />)

    expect(wrapper.hasClass('navbar-section')).toBe(true)
    expect(wrapper.hasClass('navbar-center')).toBe(false)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<NavbarSection renderAs='main'>custom</NavbarSection>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('navbar-section')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<NavbarSection />)

    expect(wrapper).toMatchSnapshot()
  })
})
