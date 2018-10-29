import React from 'react'
import { shallow } from 'enzyme'

import { AccordionBody } from '../..'

describe('AccordionBody', () => {
  it('Should render default .accordion-body markup', () => {
    const wrapper = shallow(<AccordionBody />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('accordion-body')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <AccordionBody>
        <p>hello world</p>
      </AccordionBody>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<AccordionBody className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('accordion-body')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<AccordionBody renderAs='main'>custom</AccordionBody>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('accordion-body')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<AccordionBody />)

    expect(wrapper).toMatchSnapshot()
  })
})
