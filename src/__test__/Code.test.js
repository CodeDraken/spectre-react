import React from 'react'
import { shallow } from 'enzyme'

import { Code } from '..'

describe('Code', () => {
  it('Should render a code tag by default', () => {
    const wrapper = shallow(<Code />)

    expect(wrapper.type()).toBe('code')
  })

  it('Should render a pre tag if multi', () => {
    const wrapper = shallow(<Code multi />)

    expect(wrapper.type()).toBe('pre')
  })

  it('Should render children', () => {
    const wrapper = shallow(<Code>My Code</Code>)

    expect(wrapper.text()).toBe('My Code')
  })

  it('Should include language when inline', () => {
    const wrapper = shallow(<Code lang='javascript'>My Code</Code>)

    expect(wrapper.props().lang).toBe('javascript')
  })

  it('Should include language when multi-line', () => {
    const wrapper = shallow(<Code lang='javascript' multi>My Code</Code>)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should pass additional classNames', () => {
    const wrapper = shallow(<Code className='extra'>My Code</Code>)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render with "code" class if multi', () => {
    const wrapper = shallow(<Code multi>Code</Code>)

    expect(wrapper.hasClass('code')).toBe(true)
  })

  it('Should render custom tag', () => {
    const wrapper = shallow(<Code renderAs='main'>custom</Code>)

    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Code />)

    expect(wrapper).toMatchSnapshot()
  })
})
