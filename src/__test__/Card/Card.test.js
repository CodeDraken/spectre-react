import React from 'react'
import { shallow } from 'enzyme'

import { Card } from '../..'

describe('Card', () => {
  it('Should render default .card markup', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Card>
        <p>hello world</p>
      </Card>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Card className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card')).toBe(true)
  })

  it('Should have Card.Body component', () => {
    expect(Card.Body).toBeDefined()
    expect(typeof Card.Body).toBe('function')
  })

  it('Should have Card.Footer component', () => {
    expect(Card.Footer).toBeDefined()
    expect(typeof Card.Footer).toBe('function')
  })

  it('Should have Card.Header component', () => {
    expect(Card.Header).toBeDefined()
    expect(typeof Card.Header).toBe('function')
  })

  it('Should have Card.Image component', () => {
    expect(Card.Image).toBeDefined()
    expect(typeof Card.Image).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Card renderAs='main'>custom</Card>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot()
  })
})
