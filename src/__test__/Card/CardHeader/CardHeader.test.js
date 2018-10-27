import React from 'react'
import { shallow } from 'enzyme'

import { CardHeader } from '../../../'

describe('CardHeader', () => {
  it('Should render default .card-header markup', () => {
    const wrapper = shallow(<CardHeader />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-header')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardHeader>
        <p>hello world</p>
      </CardHeader>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardHeader className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-header')).toBe(true)
  })

  it('Should have CardHeader.Title component', () => {
    expect(CardHeader.Title).toBeDefined()
    expect(typeof CardHeader.Title).toBe('function')
  })

  it('Should have CardHeader.SubTitle component', () => {
    expect(CardHeader.SubTitle).toBeDefined()
    expect(typeof CardHeader.SubTitle).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardHeader renderAs='main'>custom</CardHeader>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-header')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardHeader />)

    expect(wrapper).toMatchSnapshot()
  })
})
