import React from 'react'
import { shallow } from 'enzyme'

import { Chip } from '../..'

describe('Chip', () => {
  it('Should render default .chip markup', () => {
    const wrapper = shallow(<Chip />)

    expect(wrapper.type()).toBe('span')
    expect(wrapper.hasClass('chip')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Chip>
        <p>hello world</p>
      </Chip>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Chip className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('chip')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Chip renderAs='main'>custom</Chip>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('chip')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Chip />)

    expect(wrapper).toMatchSnapshot()
  })
})
