import React from 'react'
import { shallow, mount } from 'enzyme'

import { Heading } from '..'

describe('Heading', () => {
  it('Should render an h1 tag by default', () => {
    const wrapper = shallow(<Heading />)

    expect(wrapper.type()).toBe('h1')
  })

  it('Should render with a label', () => {
    const wrapper = mount(<Heading label='my label' />)

    expect(wrapper.find('Label')).toHaveLength(1)
  })

  it('Should render children', () => {
    const wrapper = shallow(<Heading>My Heading</Heading>)

    expect(wrapper.text()).toBe('My Heading')
  })

  it('Should pass additional classNames', () => {
    const wrapper = shallow(<Heading className='extra'>My Heading</Heading>)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render custom tag', () => {
    const wrapper = shallow(<Heading renderAs='main'>custom</Heading>)

    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Heading />)

    expect(wrapper).toMatchSnapshot()
  })

  // it('Should concat classname in props with Spectre classname', () => {
  //   const wrapper = shallow(
  //     <Heading className='other-class this-is-a-test'>test</Heading>
  //   )

  //   expect(wrapper).toMatchSnapshot()
  // })

  // it('Should use inline styles', () => {
  //   const wrapper = shallow(
  //     <Heading style={{ width: 250 }}>Test</Heading>
  //   )

  //   expect(wrapper).toMatchSnapshot()
  // })

  // it('Should render a label', () => {
  //   const wrapper = shallow(
  //     <Heading label='a label'>Test</Heading>
  //   )

  //   expect(wrapper).toMatchSnapshot()
  // })
})
