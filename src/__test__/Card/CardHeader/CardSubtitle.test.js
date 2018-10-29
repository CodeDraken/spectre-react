import React from 'react'
import { shallow } from 'enzyme'

import { CardSubtitle } from '../../..'

describe('CardSubtitle', () => {
  it('Should render default .card-subtitle markup', () => {
    const wrapper = shallow(<CardSubtitle />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-subtitle')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardSubtitle>
        <p>hello world</p>
      </CardSubtitle>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardSubtitle className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-subtitle')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardSubtitle renderAs='main'>custom</CardSubtitle>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-subtitle')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardSubtitle />)

    expect(wrapper).toMatchSnapshot()
  })
})
