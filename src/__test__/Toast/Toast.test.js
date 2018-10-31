import React from 'react'
import { shallow } from 'enzyme'

import { Toast } from '../..'

describe('Toasts', () => {
  it('Should render a span tag by default', () => {
    const wrapper = shallow(<Toast />)

    expect(wrapper.type()).toBe('div')
  })

  it('Should render children', () => {
    const wrapper = shallow(<Toast>My toast</Toast>)

    expect(wrapper.text()).toBe('My toast')
  })

  it('Should pass additional classNames', () => {
    const wrapper = shallow(<Toast className='extra'>My Toasts</Toast>)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render with "Toasts" class by default', () => {
    const wrapper = shallow(<Toast>Toasts</Toast>)

    expect(wrapper.hasClass('toast')).toBe(true)
  })

  it('Should render with "toast-{color}" class when a color is provided', () => {
    const wrapper = shallow(<Toast color='primary'>Primary</Toast>)

    expect(wrapper.hasClass('toast-primary')).toBe(true)
  })

  it('Should render custom tag', () => {
    const wrapper = shallow(<Toast renderAs='main'>custom</Toast>)

    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Toast />)

    expect(wrapper).toMatchSnapshot()
  })

  // it('Should have Toasts classname', () => {
  //   const wrapper = renderer.create(<Toasts>Test</Toasts>)

  //   expect(wrapper.toJSON()).toMatchSnapshot()
  // })

  // it('Should concat classnames in props with Spectre classnames', () => {
  //   const wrapper = renderer.create(
  //     <Toasts className='other-class this-is-a-test'>classes</Toasts>
  //   )

  //   expect(wrapper.toJSON()).toMatchSnapshot()
  // })

  // it('Should use inline styles', () => {
  //   const wrapper = renderer.create(
  //     <Toasts style={{ width: 250 }}>Inline styles</Toasts>)

  //   expect(wrapper.toJSON()).toMatchSnapshot()
  // })
})
