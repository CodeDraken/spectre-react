import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { Heading } from '../'

describe('Heading', () => {
  it('Should render an h1 tag by default', () => {
    const wrapper = shallow(<Heading />)

    expect(wrapper.type()).toBe('h1')
  })

  it('Should render with a label', () => {
    const wrapper = mount(<Heading label='my label' />)

    expect(wrapper.find('small.label')).toHaveLength(1)
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

  describe('Snapshots', () => {
    it('Should exist', () => {
      expect(Heading).toMatchSnapshot()
    })

    it('Should concat classname in props with Bulma classname', () => {
      const wrapper = renderer.create(
        <Heading className='other-class this-is-a-test'>test</Heading>
      )

      expect(wrapper.toJSON()).toMatchSnapshot()
    })

    it('Should use inline styles', () => {
      const wrapper = renderer.create(
        <Heading style={{ width: 250 }}>Test</Heading>
      )

      expect(wrapper.toJSON()).toMatchSnapshot()
    })

    it('Should render a label', () => {
      const wrapper = renderer.create(
        <Heading label='a label'>Test</Heading>
      )

      expect(wrapper.toJSON()).toMatchSnapshot()
    })
  })
})
