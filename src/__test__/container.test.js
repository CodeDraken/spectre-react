import React from 'react'
import { shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'

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
