import React from 'react'
import { shallow } from 'enzyme'

import { Row } from '../'

describe('Row', () => {
  it('Should render default .columns markup', () => {
    const wrapper = shallow(<Row />)

    expect(wrapper.html()).toBe('<div class="columns"></div>')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Row>
        <p>hello world</p>
      </Row>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<div class="columns"><p>hello world</p></div>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Row className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('columns')).toBe(true)
  })

  it('Should render gapless', () => {
    const wrapper = shallow(<Row className='extra' gapless />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('columns')).toBe(true)
    expect(wrapper.hasClass('col-gapless')).toBe(true)
  })

  it('Should render oneline', () => {
    const wrapper = shallow(<Row className='extra' oneline />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('columns')).toBe(true)
    expect(wrapper.hasClass('col-oneline')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Row renderAs='main'>custom</Row>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('columns')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Row />)

    expect(wrapper).toMatchSnapshot()
  })
})
