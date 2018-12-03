import React from 'react'
import { shallow } from 'enzyme'

import { TabMenuItem } from '../..'

describe('TabMenuItem', () => {
  it('Should render default .tab-item markup', () => {
    const wrapper = shallow(<TabMenuItem />)

    expect(wrapper.type()).toBe('li')
    expect(wrapper.hasClass('tab-item')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TabMenuItem>
        <p>hello world</p>
      </TabMenuItem>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TabMenuItem className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tab-item')).toBe(true)
  })

  it('Should use active class', () => {
    const wrapper = shallow(<TabMenuItem active />)

    expect(wrapper.hasClass('active')).toBe(true)
  })

  it('Should use action class', () => {
    const wrapper = shallow(<TabMenuItem action />)

    expect(wrapper.hasClass('tab-action')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TabMenuItem renderAs='div'>custom</TabMenuItem>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tab-item')).toBe(true)
    expect(wrapper.type()).toBe('div')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TabMenuItem />)

    expect(wrapper).toMatchSnapshot()
  })
})
