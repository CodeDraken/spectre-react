import React from 'react'
import { shallow } from 'enzyme'

import { Figure } from '../..'

describe('Figure', () => {
  it('Should render default .figure markup', () => {
    const wrapper = shallow(<Figure />)

    expect(wrapper.hasClass('figure')).toBe(true)
    expect(wrapper.type()).toBe('figure')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Figure>
        <p>hello world</p>
      </Figure>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.text()).toBe('hello world')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Figure className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should be an avatar', () => {
    const wrapper = shallow(<Figure avatar />)

    expect(wrapper.hasClass('avatar')).toBe(true)
  })

  it('Should render the xs avatar size', () => {
    const wrapper = shallow(<Figure avatar size='xs' />)

    expect(wrapper.hasClass('avatar-xs')).toBe(true)
  })

  it('Should render the sm avatar size', () => {
    const wrapper = shallow(<Figure avatar size='sm' />)

    expect(wrapper.hasClass('avatar-sm')).toBe(true)
  })

  it('Should render the lg avatar size', () => {
    const wrapper = shallow(<Figure avatar size='lg' />)

    expect(wrapper.hasClass('avatar-lg')).toBe(true)
  })

  it('Should render the xl avatar size', () => {
    const wrapper = shallow(<Figure avatar size='xl' />)

    expect(wrapper.hasClass('avatar-xl')).toBe(true)
  })

  it('Should pass intials as a data-initials attribute', () => {
    const wrapper = shallow(<Figure avatar initials='CD' />)

    expect(wrapper.prop('data-initial')).toBe('CD')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Figure renderAs='main' />)

    expect(wrapper.type()).toBe('main')
  })

  it('Should have Figure.Caption component', () => {
    expect(Figure.Caption).toBeDefined()
    expect(typeof Figure.Caption).toBe('function')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Figure />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the snapshot of an avatar', () => {
    const wrapper = shallow(<Figure avatar size='sm' initials='CD' />)

    expect(wrapper).toMatchSnapshot()
  })
})
