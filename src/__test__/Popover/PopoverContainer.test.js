import React from 'react'
import { shallow } from 'enzyme'

import { PopoverContainer } from '../..'

describe('PopoverContainer', () => {
  it('Should render default .popover-container markup', () => {
    const wrapper = shallow(<PopoverContainer />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('popover-container')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <PopoverContainer>
        <p>hello world</p>
      </PopoverContainer>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<PopoverContainer className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('popover-container')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<PopoverContainer renderAs='main'>custom</PopoverContainer>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('popover-container')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<PopoverContainer />)

    expect(wrapper).toMatchSnapshot()
  })
})
