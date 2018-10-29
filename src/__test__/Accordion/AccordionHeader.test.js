import React from 'react'
import { shallow } from 'enzyme'

import { AccordionHeader } from '../..'

describe('AccordionHeader', () => {
  it('Should render default .accordion-header markup', () => {
    const wrapper = shallow(<AccordionHeader />)

    expect(wrapper.children().length).toBe(2)
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('label').length).toBe(1)
    expect(wrapper.type()).toBe(React.Fragment)
    expect(wrapper.find('label').hasClass('accordion-header')).toBe(true)
    expect(wrapper.find('label').hasClass('c-hand')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <AccordionHeader>
        <p>hello world</p>
      </AccordionHeader>
    )

    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames to the label', () => {
    const wrapper = shallow(<AccordionHeader className='extra' />)

    expect(wrapper.find('label').hasClass('extra')).toBe(true)
    expect(wrapper.find('label').hasClass('accordion-header')).toBe(true)
  })

  it('Should pass an id to both the input and label', () => {
    const wrapper = shallow(<AccordionHeader id='test' />)

    expect(wrapper.find('label').prop('htmlFor')).toBe('test')
    expect(wrapper.find('input').prop('id')).toBe('test')
  })

  it('Should have a hidden input', () => {
    const wrapper = shallow(<AccordionHeader />)

    expect(wrapper.find('input').prop('hidden')).toBe(true)
  })

  it('Should have an input of type checkbox by default', () => {
    const wrapper = shallow(<AccordionHeader />)

    expect(wrapper.find('input').prop('type')).toBe('checkbox')
  })

  it('Should have an input of type radio when passed a type', () => {
    const wrapper = shallow(<AccordionHeader type='radio' />)

    expect(wrapper.find('input').prop('type')).toBe('radio')
  })

  it('Should pass inputProps to the input', () => {
    const inputProps = { hidden: false, name: 'test' }
    const wrapper = shallow(<AccordionHeader inputProps={inputProps} />)

    expect(wrapper.find('input').prop('name')).toBe('test')
    expect(wrapper.find('input').prop('hidden')).toBe(false)
  })

  it('Should not render as a custom element', () => {
    const wrapper = shallow(<AccordionHeader renderAs='main'>custom</AccordionHeader>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.find('label').hasClass('accordion-header')).toBe(true)
    expect(wrapper.type()).toBe(React.Fragment)
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<AccordionHeader />)

    expect(wrapper).toMatchSnapshot()
  })
})
