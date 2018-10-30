import React from 'react'
import { shallow } from 'enzyme'

import { ModalTitle } from '../..'

describe('ModalTitle', () => {
  it('Should render default .modal-title markup', () => {
    const wrapper = shallow(<ModalTitle />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal-title')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <ModalTitle>
        <p>hello world</p>
      </ModalTitle>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<ModalTitle className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal-title')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<ModalTitle renderAs='main'>custom</ModalTitle>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal-title')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<ModalTitle />)

    expect(wrapper).toMatchSnapshot()
  })
})
