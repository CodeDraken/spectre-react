import React from 'react'
import { shallow } from 'enzyme'

import { TileSubtitle } from '../..'

describe('TileSubtitle', () => {
  it('Should render default .tile-subtitle markup', () => {
    const wrapper = shallow(<TileSubtitle />)

    expect(wrapper.type()).toBe('p')
    expect(wrapper.hasClass('tile-subtitle')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TileSubtitle>
        hello world
      </TileSubtitle>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.text()).toBe('hello world')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TileSubtitle className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tile-subtitle')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TileSubtitle renderAs='main'>custom</TileSubtitle>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tile-subtitle')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TileSubtitle />)

    expect(wrapper).toMatchSnapshot()
  })
})
