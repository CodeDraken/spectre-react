import React from 'react'
import { shallow } from 'enzyme'

import { FigureCaption } from '../..'

describe('FigureCaption', () => {
  it('Should render default .figure-caption markup', () => {
    const wrapper = shallow(<FigureCaption />)

    expect(wrapper.hasClass('figure-caption')).toBe(true)
    expect(wrapper.type()).toBe('figcaption')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <FigureCaption>
        <p>hello world</p>
      </FigureCaption>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.text()).toBe('hello world')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<FigureCaption className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should have text-left class', () => {
    const wrapper = shallow(<FigureCaption align='left' />)

    expect(wrapper.hasClass('text-left')).toBe(true)
  })

  it('Should have text-center class', () => {
    const wrapper = shallow(<FigureCaption align='center' />)

    expect(wrapper.hasClass('text-center')).toBe(true)
  })

  it('Should have text-right class', () => {
    const wrapper = shallow(<FigureCaption align='right' />)

    expect(wrapper.hasClass('text-right')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<FigureCaption renderAs='main' />)

    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<FigureCaption />)

    expect(wrapper).toMatchSnapshot()
  })
})
