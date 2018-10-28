import React from 'react'
import { shallow } from 'enzyme'

import { TileIcon } from '../..'

describe('TileIcon', () => {
  it('Should render default .tile-icon markup', () => {
    const wrapper = shallow(<TileIcon />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('tile-icon')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TileIcon>
        <p>hello world</p>
      </TileIcon>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TileIcon className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tile-icon')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TileIcon renderAs='main'>custom</TileIcon>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tile-icon')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TileIcon />)

    expect(wrapper).toMatchSnapshot()
  })
})
