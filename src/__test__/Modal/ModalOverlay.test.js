import React from 'react'
import { shallow } from 'enzyme'

import { ModalOverlay } from '../..'

describe('ModalOverlay', () => {
  it('Should render default .modal-overlay markup', () => {
    const wrapper = shallow(<ModalOverlay />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal-overlay')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <ModalOverlay>
        <p>hello world</p>
      </ModalOverlay>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<ModalOverlay className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal-overlay')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<ModalOverlay renderAs='main'>custom</ModalOverlay>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal-overlay')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<ModalOverlay />)

    expect(wrapper).toMatchSnapshot()
  })
})
