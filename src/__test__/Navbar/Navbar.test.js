import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../..'

describe('Navbar', () => {
  it('Should render default .navbar markup', () => {
    const wrapper = shallow(<Navbar />)

    expect(wrapper.type()).toBe('nav')
    expect(wrapper.hasClass('navbar')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Navbar>
        <p>hello world</p>
      </Navbar>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<nav class="navbar"><p>hello world</p></nav>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Navbar className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('navbar')).toBe(true)
  })

  it('Should have Navbar.Brand component', () => {
    expect(Navbar.Brand).toBeDefined()
    expect(typeof Navbar.Brand).toBe('function')
  })

  it('Should have Navbar.Section component', () => {
    expect(Navbar.Section).toBeDefined()
    expect(typeof Navbar.Section).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Navbar renderAs='main'>custom</Navbar>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('navbar')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Navbar />)

    expect(wrapper).toMatchSnapshot()
  })
})
