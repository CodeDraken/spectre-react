import React from 'react'
import { shallow } from 'enzyme'

import { Label } from '../'

describe('Label', () => {
  it('Should render a span tag by default', () => {
    const wrapper = shallow(<Label />)

    expect(wrapper.type()).toBe('span')
  })

  it('Should render children', () => {
    const wrapper = shallow(<Label>My label</Label>)

    expect(wrapper.text()).toBe('My label')
  })

  it('Should pass additional classNames', () => {
    const wrapper = shallow(<Label className='extra'>My label</Label>)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should render with "label" class by default', () => {
    const wrapper = shallow(<Label>Label</Label>)

    expect(wrapper.hasClass('label')).toBe(true)
  })

  it('Should render with "label-rounded" class when "rounded" is provided', () => {
    const wrapper = shallow(<Label rounded>Round</Label>)

    expect(wrapper.hasClass('label-rounded')).toBe(true)
  })

  it('Should render with "form-label" class when "form" is provided', () => {
    const wrapper = shallow(<Label form>form labels show above input</Label>)

    expect(wrapper.hasClass('form-label')).toBe(true)
  })

  it('Should render a label tag when its passed a "for" attribute', () => {
    const wrapper = shallow(<Label for='test'>For attr</Label>)

    expect(wrapper.type()).toBe('label')
  })

  it('Should render with "label-{color}" class when a color is provided', () => {
    const wrapper = shallow(<Label color='primary'>Primary</Label>)

    expect(wrapper.hasClass('label-primary')).toBe(true)
  })

  it('Should render custom tag', () => {
    const wrapper = shallow(<Label renderAs='main'>custom</Label>)

    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Label />)

    expect(wrapper).toMatchSnapshot()
  })

  // it('Should have label classname', () => {
  //   const wrapper = renderer.create(<Label>Test</Label>)

  //   expect(wrapper.toJSON()).toMatchSnapshot()
  // })

  // it('Should concat classnames in props with Spectre classnames', () => {
  //   const wrapper = renderer.create(
  //     <Label className='other-class this-is-a-test'>classes</Label>
  //   )

  //   expect(wrapper.toJSON()).toMatchSnapshot()
  // })

  // it('Should use inline styles', () => {
  //   const wrapper = renderer.create(
  //     <Label style={{ width: 250 }}>Inline styles</Label>)

  //   expect(wrapper.toJSON()).toMatchSnapshot()
  // })
})
