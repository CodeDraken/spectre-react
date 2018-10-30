import React from 'react'
import { shallow } from 'enzyme'

import { ModalContainer } from '../..'

describe('ModalContainer', () => {
  it('Should render default .modal-container markup', () => {
    const wrapper = shallow(<ModalContainer />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal-container')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <ModalContainer>
        <p>hello world</p>
      </ModalContainer>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<ModalContainer className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal-container')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<ModalContainer renderAs='main'>custom</ModalContainer>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal-container')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<ModalContainer />)

    expect(wrapper).toMatchSnapshot()
  })
})
