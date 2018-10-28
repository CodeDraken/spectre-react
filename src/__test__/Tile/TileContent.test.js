import React from 'react'
import { shallow } from 'enzyme'

import { TileContent } from '../..'

describe('TileContent', () => {
  it('Should render default .tile-content markup', () => {
    const wrapper = shallow(<TileContent />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('tile-content')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <TileContent>
        <p>hello world</p>
      </TileContent>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<TileContent className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tile-content')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<TileContent renderAs='main'>custom</TileContent>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tile-content')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<TileContent />)

    expect(wrapper).toMatchSnapshot()
  })
})
