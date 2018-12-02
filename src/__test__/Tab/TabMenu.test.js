import React from 'react'
import { shallow, render } from 'enzyme'

import { TabMenu } from '../..'

describe('TabMenu', () => {
  it('Should render default .tab markup', () => {
    const wrapper = shallow(<TabMenu />)

    expect(wrapper.type()).toBe('ul')
    expect(wrapper.hasClass('tab')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TabMenu>
        <p>hello world</p>
      </TabMenu>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TabMenu className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tab')).toBe(true)
  })

  it('Should use tab-block class', () => {
    const wrapper = shallow(<TabMenu block />)

    expect(wrapper.hasClass('tab-block')).toBe(true)
  })

  it('Should have TabMenu.Item component', () => {
    expect(TabMenu.Item).toBeDefined()
    expect(typeof TabMenu.Item).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TabMenu renderAs='div'>custom</TabMenu>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tab')).toBe(true)
    expect(wrapper.type()).toBe('div')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TabMenu />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the use case snapshot', () => {
    const wrapper = render(
      <TabMenu block>
        <TabMenu.Item
          active
          onClick={() => window.alert('clicked 1')}
        >
          <a className='btn btn-link'>Active</a>
        </TabMenu.Item>
        <TabMenu.Item
          onClick={() => window.alert('clicked 2')}
        >
          <a className='btn btn-link'>Another Tab</a>
        </TabMenu.Item>
      </TabMenu>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
