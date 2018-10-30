import React from 'react'
import { shallow } from 'enzyme'

import { ModalFooter } from '../..'

describe('ModalFooter', () => {
  it('Should render default .modal-footer markup', () => {
    const wrapper = shallow(<ModalFooter />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal-footer')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <ModalFooter>
        <p>hello world</p>
      </ModalFooter>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<ModalFooter className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal-footer')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<ModalFooter renderAs='main'>custom</ModalFooter>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal-footer')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<ModalFooter />)

    expect(wrapper).toMatchSnapshot()
  })
})
