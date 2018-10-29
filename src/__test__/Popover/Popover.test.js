import React from 'react'
import { shallow, render } from 'enzyme'

import { Popover } from '../..'

describe('Popover', () => {
  it('Should render default .popover markup', () => {
    const wrapper = shallow(<Popover />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('popover')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Popover>
        <p>hello world</p>
      </Popover>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Popover className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('popover')).toBe(true)
  })

  it('Should render as .popover-right', () => {
    const wrapper = shallow(<Popover position='right' />)

    expect(wrapper.hasClass('popover-right')).toBe(true)
  })

  it('Should render as .popover-bottom', () => {
    const wrapper = shallow(<Popover position='bottom' />)

    expect(wrapper.hasClass('popover-bottom')).toBe(true)
  })

  it('Should render as .popover-left', () => {
    const wrapper = shallow(<Popover position='left' />)

    expect(wrapper.hasClass('popover-left')).toBe(true)
  })

  it('Should have Popover.Container component', () => {
    expect(Popover.Container).toBeDefined()
    expect(typeof Popover.Container).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Popover renderAs='main'>custom</Popover>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('popover')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Popover />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the use case', () => {
    const wrapper = render(
      <Popover>
        <button class='btn btn-primary'>popover</button>
        <Popover.Container>
          <div class='card'>
            <div class='card-header'>
              header
            </div>
            <div class='card-body'>
              body
            </div>
            <div class='card-footer'>
              footer
            </div>
          </div>
        </Popover.Container>
      </Popover>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
