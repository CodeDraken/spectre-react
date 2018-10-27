import React from 'react'
import { shallow } from 'enzyme'

import { CardImage } from '../..'

describe('CardImage', () => {
  it('Should render default .card-image markup', () => {
    const wrapper = shallow(<CardImage />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-image')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardImage>
        <p>hello world</p>
      </CardImage>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardImage className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-image')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardImage renderAs='main'>custom</CardImage>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-image')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardImage />)

    expect(wrapper).toMatchSnapshot()
  })
})
