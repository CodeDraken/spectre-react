import React from 'react'
import { shallow } from 'enzyme'

import { Container } from '../'

describe('Container', () => {
  it('Should render default .container markup', () => {
    const wrapper = shallow(<Container />)

    expect(wrapper.html()).toBe('<div class="container"></div>')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Container>
        <p>hello world</p>
      </Container>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<div class="container"><p>hello world</p></div>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Container className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('container')).toBe(true)
  })

  it('Should render the xs size', () => {
    const wrapper = shallow(<Container className='extra' size='xs' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('container')).toBe(true)
    expect(wrapper.hasClass('grid-xs')).toBe(true)
  })

  it('Should render the sm size', () => {
    const wrapper = shallow(<Container className='extra' size='sm' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('container')).toBe(true)
    expect(wrapper.hasClass('grid-sm')).toBe(true)
  })

  it('Should render the md size', () => {
    const wrapper = shallow(<Container className='extra' size='md' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('container')).toBe(true)
    expect(wrapper.hasClass('grid-md')).toBe(true)
  })

  it('Should render the lg size', () => {
    const wrapper = shallow(<Container className='extra' size='lg' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('container')).toBe(true)
    expect(wrapper.hasClass('grid-lg')).toBe(true)
  })

  it('Should render the xl size', () => {
    const wrapper = shallow(<Container className='extra' size='xl' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('container')).toBe(true)
    expect(wrapper.hasClass('grid-xl')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Container renderAs='main'>custom</Container>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('container')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Container />)

    expect(wrapper).toMatchSnapshot()
  })
})
