import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { Label } from '../'

describe('Label', () => {
  it('should render a span tag by default', () => {
    const wrapper = shallow(<Label />)

    expect(wrapper.type()).toBe('span')
  })

  it('should render children', () => {
    const wrapper = shallow(<Label>My label</Label>)

    expect(wrapper.text()).toBe('My label')
  })

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Label className='extra'>My label</Label>)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('should render with "label" class by default', () => {
    const wrapper = shallow(<Label>Label</Label>)

    expect(wrapper.hasClass('label')).toBe(true)
  })

  it('should render with "label-rounded" class when "rounded" is provided', () => {
    const wrapper = shallow(<Label rounded>Round</Label>)

    expect(wrapper.hasClass('label-rounded')).toBe(true)
  })

  it('should render with "form-label" class when "form" is provided', () => {
    const wrapper = shallow(<Label form>form labels show above input</Label>)

    expect(wrapper.hasClass('form-label')).toBe(true)
  })

  it('should render a label tag when its passed a "for" attribute', () => {
    const wrapper = shallow(<Label for='test'>For attr</Label>)

    expect(wrapper.type()).toBe('label')
  })

  it('should render with "label-{color}" class when a color is provided', () => {
    const wrapper = shallow(<Label color='primary'>Primary</Label>)

    expect(wrapper.hasClass('label-primary')).toBe(true)
  })

  it('should render custom tag', () => {
    const wrapper = shallow(<Label renderAs='main'>custom</Label>)

    expect(wrapper.type()).toBe('main')
  })

  describe('Snapshots', () => {
    it('Should exist', () => {
      expect(Label).toMatchSnapshot()
    })

    it('Should have label classname', () => {
      const component = renderer.create(<Label>Test</Label>)

      expect(component.toJSON()).toMatchSnapshot()
    })

    it('Should concat classnames in props with Spectre classnames', () => {
      const component = renderer.create(
        <Label className='other-class this-is-a-test'>classes</Label>
      )

      expect(component.toJSON()).toMatchSnapshot()
    })

    it('Should use inline styles', () => {
      const component = renderer.create(
        <Label style={{ width: 250 }}>Inline styles</Label>)

      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
