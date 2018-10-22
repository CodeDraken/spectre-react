import React from 'react'
import { shallow } from 'enzyme'

import { Icon } from '..'

describe('Icon', () => {
  it('Should render default .icon markup', () => {
    const wrapper = shallow(<Icon icon='caret' />)

    expect(wrapper.html()).toBe('<i class="icon icon-caret"></i>')
  })

  it('Should not render children', () => {
    const wrapper = shallow(
      <Icon icon='caret'>
        <p>hello world</p>
      </Icon>
    )

    expect(wrapper.children().length).toBe(0)
    expect(wrapper.html()).toBe('<i class="icon icon-caret"></i>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Icon className='extra' icon='caret' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('icon')).toBe(true)
  })

  it('Should render the 2x size', () => {
    const wrapper = shallow(<Icon className='extra' size='2x' icon='caret' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('icon')).toBe(true)
    expect(wrapper.hasClass('icon-2x')).toBe(true)
  })

  it('Should render the 3x size', () => {
    const wrapper = shallow(<Icon className='extra' size='3x' icon='caret' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('icon')).toBe(true)
    expect(wrapper.hasClass('icon-3x')).toBe(true)
  })

  it('Should render the 4x size', () => {
    const wrapper = shallow(<Icon className='extra' size='4x' icon='caret' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('icon')).toBe(true)
    expect(wrapper.hasClass('icon-4x')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Icon renderAs='main' icon='caret'>custom</Icon>)

    expect(wrapper.hasClass('icon')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Icon icon='caret' />)

    expect(wrapper).toMatchSnapshot()
  })
})
