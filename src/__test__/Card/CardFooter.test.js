import React from 'react'
import { shallow } from 'enzyme'

import { CardFooter } from '../..'

describe('CardFooter', () => {
  it('Should render default .card-footer markup', () => {
    const wrapper = shallow(<CardFooter />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-footer')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardFooter>
        <p>hello world</p>
      </CardFooter>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardFooter className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-footer')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardFooter renderAs='main'>custom</CardFooter>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-footer')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardFooter />)

    expect(wrapper).toMatchSnapshot()
  })
})
