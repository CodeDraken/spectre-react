import React from 'react'
import { shallow } from 'enzyme'

import { Video } from '../'

describe('Video', () => {
  it('Should render default video markup', () => {
    const wrapper = shallow(<Video />)

    expect(wrapper.type()).toBe('video')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Video>
        <p>hello world</p>
      </Video>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.text()).toBe('hello world')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Video className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should have video-responsive class when responsive set to true', () => {
    const wrapper = shallow(<Video responsive />)

    expect(wrapper.hasClass('video-responsive')).toBe(true)
  })

  it('Should have video-responsive class when ratio is set', () => {
    const wrapper = shallow(<Video ratio='16:9' />)

    expect(wrapper.hasClass('video-responsive')).toBe(true)
  })

  it('Should have video-responsive-1-1 class when ratio is 1:1', () => {
    const wrapper = shallow(<Video ratio='1:1' />)

    expect(wrapper.hasClass('video-responsive-1-1')).toBe(true)
  })

  it('Should have video-responsive-4-3 class when ratio is 4:3', () => {
    const wrapper = shallow(<Video ratio='4:3' />)

    expect(wrapper.hasClass('video-responsive-4-3')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Video renderAs='main' />)

    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Video />)

    expect(wrapper).toMatchSnapshot()
  })
})
