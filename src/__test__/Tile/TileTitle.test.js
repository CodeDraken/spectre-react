import React from 'react'
import { shallow } from 'enzyme'

import { TileTitle } from '../..'

describe('TileTitle', () => {
  it('Should render default .tile-title markup', () => {
    const wrapper = shallow(<TileTitle />)

    expect(wrapper.type()).toBe('p')
    expect(wrapper.hasClass('tile-title')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TileTitle>
        hello world
      </TileTitle>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.text()).toBe('hello world')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TileTitle className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tile-title')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TileTitle renderAs='main'>custom</TileTitle>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tile-title')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TileTitle />)

    expect(wrapper).toMatchSnapshot()
  })
})
