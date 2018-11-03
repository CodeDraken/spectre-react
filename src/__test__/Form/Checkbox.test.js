import React from 'react'
import { render } from 'enzyme'

import { Checkbox } from '../..'

describe('Checkbox', () => {
  it('Should match the default snapshot', () => {
    const wrapper = render(<Checkbox />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the snapshot with a label', () => {
    const wrapper = render(<Checkbox label='A Label' />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should not render children', () => {
    const wrapper = render(
      <Checkbox>
        <p>hello world</p>
      </Checkbox>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Should pass classnames', () => {
    const wrapper = render(<Checkbox className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-checkbox')).toBe(true)
  })

  it('Should render the sm size', () => {
    const wrapper = render(<Checkbox className='extra' small />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-checkbox')).toBe(true)
    expect(wrapper.hasClass('input-sm')).toBe(true)
  })

  it('Should render the lg size', () => {
    const wrapper = render(<Checkbox className='extra' small />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-checkbox')).toBe(true)
    expect(wrapper.hasClass('input-sm')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = render(<Checkbox renderAs='main' />)

    expect(wrapper.hasClass('form-checkbox')).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
