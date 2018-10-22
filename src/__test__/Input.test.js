import React from 'react'
import { shallow } from 'enzyme'

import { Input } from '..'

describe('Input', () => {
  it('Should render default .form-input markup', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.html()).toBe('<input type="text" class="form-input"/>')
  })

  it('Should not render children', () => {
    const wrapper = shallow(
      <Input>
        <p>hello world</p>
      </Input>
    )

    expect(wrapper.children().length).toBe(0)
    expect(wrapper.html()).toBe('<input type="text" class="form-input"/>')
  })

  it('Should render inside a wrapper when has iconLeft', () => {
    const wrapper = shallow(
      <Input iconLeft>
        <i />
      </Input>
    )

    expect(wrapper.hasClass('has-icon-left')).toBe(true)
    expect(wrapper.children().length).toBe(2)
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('i').length).toBe(1)
  })

  it('Should render inside a wrapper when has iconRight', () => {
    const wrapper = shallow(
      <Input iconRight>
        <i />
      </Input>
    )

    expect(wrapper.hasClass('has-icon-right')).toBe(true)
    expect(wrapper.children().length).toBe(2)
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('i').length).toBe(1)
  })

  it('Should render a custom icon wrapper', () => {
    const wrapper = shallow(<Input iconRight iconWrapper='main'><i /></Input>)

    expect(wrapper.type()).toBe('main')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Input className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-input')).toBe(true)
  })

  it('Should render the sm size', () => {
    const wrapper = shallow(<Input className='extra' small />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-input')).toBe(true)
    expect(wrapper.hasClass('input-sm')).toBe(true)
  })

  it('Should render the lg size', () => {
    const wrapper = shallow(<Input className='extra' small />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-input')).toBe(true)
    expect(wrapper.hasClass('input-sm')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Input renderAs='main'>custom</Input>)

    expect(wrapper.hasClass('form-input')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the default snapshot', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the snapshot with icons', () => {
    const wrapper = shallow(<Input iconRight><i /></Input>)

    expect(wrapper).toMatchSnapshot()
  })
})
