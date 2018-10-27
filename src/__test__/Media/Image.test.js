import React from 'react'
import { shallow, mount } from 'enzyme'

import { Image } from '../..'

describe('Image', () => {
  it('Should render default img markup', () => {
    const wrapper = shallow(<Image src='#' />)

    expect(wrapper.html()).toBe('<img src="#"/>')
  })

  it('Should not render children', () => {
    const wrapper = shallow(
      <Image>
        <p>hello world</p>
      </Image>
    )

    expect(wrapper.children().length).toBe(0)
    expect(wrapper.html()).toBe('<img/>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Image className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render img-responsive', () => {
    const wrapper = shallow(<Image responsive />)

    expect(wrapper.hasClass('img-responsive')).toBe(true)
  })

  it('Should render img-fit-contain', () => {
    const wrapper = shallow(<Image contain />)

    expect(wrapper.hasClass('img-fit-contain')).toBe(true)
  })

  it('Should render img-fit-cover', () => {
    const wrapper = shallow(<Image cover />)

    expect(wrapper.hasClass('img-fit-cover')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const Custom = ({ children, ...attributes }) => {
      return (
        <div>
          <p>Test</p>
          <img {...attributes} />
        </div>
      )
    }

    const wrapper = mount(<Image renderAs={Custom} src='#test' />)

    expect(wrapper.html()).toBe('<div><p>Test</p><img src="#test"></div>')
    expect(wrapper.find('img').props().src).toBe('#test')
    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Image />)

    expect(wrapper).toMatchSnapshot()
  })
})
