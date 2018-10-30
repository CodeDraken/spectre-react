import React from 'react'
import { shallow } from 'enzyme'

import { ModalHeader } from '../..'

describe('ModalHeader', () => {
  it('Should render default .modal-header markup', () => {
    const wrapper = shallow(<ModalHeader />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal-header')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <ModalHeader>
        <p>hello world</p>
      </ModalHeader>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<ModalHeader className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal-header')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<ModalHeader renderAs='main'>custom</ModalHeader>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal-header')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should have ModalHeader.Title component', () => {
    expect(ModalHeader.Title).toBeDefined()
    expect(typeof ModalHeader.Title).toBe('function')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<ModalHeader />)

    expect(wrapper).toMatchSnapshot()
  })
})
