import React from 'react'
import { shallow } from 'enzyme'

import { CardSubTitle } from '../../../'

describe('CardSubTitle', () => {
  it('Should render default .card-subtitle markup', () => {
    const wrapper = shallow(<CardSubTitle />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-subtitle')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardSubTitle>
        <p>hello world</p>
      </CardSubTitle>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardSubTitle className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-subtitle')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardSubTitle renderAs='main'>custom</CardSubTitle>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-subtitle')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardSubTitle />)

    expect(wrapper).toMatchSnapshot()
  })
})
