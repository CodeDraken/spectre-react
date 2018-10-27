import React from 'react'
import { shallow } from 'enzyme'

import { CardTitle } from '../../../'

describe('CardTitle', () => {
  it('Should render default .card-title markup', () => {
    const wrapper = shallow(<CardTitle />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-title')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardTitle>
        <p>hello world</p>
      </CardTitle>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardTitle className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-title')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardTitle renderAs='main'>custom</CardTitle>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-title')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardTitle />)

    expect(wrapper).toMatchSnapshot()
  })
})
