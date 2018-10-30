import React from 'react'
import { shallow } from 'enzyme'

import { ModalBody } from '../..'

describe('ModalBody', () => {
  it('Should render default .modal-body markup', () => {
    const wrapper = shallow(<ModalBody />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal-body')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <ModalBody>
        <p>hello world</p>
      </ModalBody>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<ModalBody className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal-body')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<ModalBody renderAs='main'>custom</ModalBody>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal-body')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<ModalBody />)

    expect(wrapper).toMatchSnapshot()
  })
})
