import React from 'react'
import { shallow } from 'enzyme'

import { FormGroup } from '../..'

describe('FormGroup', () => {
  it('Should render default .form-group markup', () => {
    const wrapper = shallow(<FormGroup />)

    expect(wrapper.html()).toBe('<div class="form-group"></div>')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <FormGroup>
        <label>hello world</label>
      </FormGroup>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<div class="form-group"><label>hello world</label></div>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<FormGroup className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('form-group')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<FormGroup renderAs='main'>custom</FormGroup>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('form-group')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<FormGroup />)

    expect(wrapper).toMatchSnapshot()
  })
})
