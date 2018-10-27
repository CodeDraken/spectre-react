import React from 'react'
import { shallow } from 'enzyme'

import { CardBody } from '../..'

describe('CardBody', () => {
  it('Should render default .card-body markup', () => {
    const wrapper = shallow(<CardBody />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('card-body')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <CardBody>
        <p>hello world</p>
      </CardBody>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<CardBody className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('card-body')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<CardBody renderAs='main'>custom</CardBody>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('card-body')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<CardBody />)

    expect(wrapper).toMatchSnapshot()
  })
})
