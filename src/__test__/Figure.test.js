import React from 'react'
import { shallow } from 'enzyme'

import { Figure } from '../'

describe('Figure', () => {
  it('Should render default .figure markup', () => {
    const wrapper = shallow(<Figure />)

    expect(wrapper.hasClass('figure')).toBe(true)
    expect(wrapper.type()).toBe('figure')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Figure>
        <p>hello world</p>
      </Figure>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.text()).toBe('hello world')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Figure className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Figure renderAs='main' />)

    expect(wrapper.type()).toBe('main')
  })

  it('Should have Figure.Caption component', () => {
    expect(Figure.Caption).toBeDefined()
    expect(typeof Figure.Caption).toBe('function')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Figure />)

    expect(wrapper).toMatchSnapshot()
  })
})
