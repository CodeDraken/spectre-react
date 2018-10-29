import React from 'react'
import { shallow, render } from 'enzyme'

import { Accordion } from '../..'

describe('Accordion', () => {
  it('Should render default .accordion markup', () => {
    const wrapper = shallow(<Accordion />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('accordion')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Accordion>
        <p>hello world</p>
      </Accordion>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Accordion className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('accordion')).toBe(true)
  })

  it('Should have Accordion.Body component', () => {
    expect(Accordion.Body).toBeDefined()
    expect(typeof Accordion.Body).toBe('function')
  })

  it('Should have Accordion.Header component', () => {
    expect(Accordion.Header).toBeDefined()
    expect(typeof Accordion.Header).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Accordion renderAs='main'>custom</Accordion>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('accordion')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Accordion />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the use case', () => {
    const wrapper = render(
      <div>
        <Accordion>
          <Accordion.Header id='accordion-1'>
            Toggle
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Accordion.Body>
        </Accordion>

        <Accordion>
          <Accordion.Header id='accordion-2' type='radio'>
            <i />
            Toggle Radio
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Accordion.Body>
        </Accordion>
      </div>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
