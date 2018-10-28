import React from 'react'
import { shallow } from 'enzyme'

import { TileAction } from '../..'

describe('TileAction', () => {
  it('Should render default .tile-action markup', () => {
    const wrapper = shallow(<TileAction />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('tile-action')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TileAction>
        <p>hello world</p>
      </TileAction>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TileAction className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tile-action')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TileAction renderAs='main'>custom</TileAction>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tile-action')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TileAction />)

    expect(wrapper).toMatchSnapshot()
  })
})
