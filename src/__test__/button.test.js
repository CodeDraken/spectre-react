import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { Button } from '..'

describe('Button', () => {
  it('Should render children', () => {
    const wrapper = shallow(<Button>Hello world</Button>)

    expect(wrapper.text()).toBe('Hello world')
  })

  it('Should render custom element', () => {
    const Link = props => (<a href='/home' {...props}>{props.children}</a>)
    const wrapper = mount(<Button tag={Link}>Home</Button>)

    expect(wrapper.find('a').hostNodes().length).toBe(1)
    expect(wrapper.text()).toBe('Home')
  })

  it('Should render an anchor element if href exists', () => {
    const wrapper = mount(<Button href='/home'>Home</Button>)

    expect(wrapper.find('a').hostNodes().length).toBe(1)
    expect(wrapper.text()).toBe('Home')
  })

  it('Should render type as undefined by default when tag is "button"', () => {
    const wrapper = mount(<Button>Home</Button>)

    expect(wrapper.find('button').hostNodes().prop('type')).toBe(undefined)
    expect(wrapper.text()).toBe('Home')
  })

  it('Should render type as "button" by default when tag is "button" and onClick is provided', () => {
    const wrapper = mount(<Button onClick={() => {}}>Home</Button>)

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('button')
    expect(wrapper.text()).toBe('Home')
  })

  it('Should render type as user defined when defined by the user', () => {
    const wrapper = mount(<Button type='submit'>Home</Button>)

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('submit')
    expect(wrapper.text()).toBe('Home')
  })

  it('Should not render type by default when the type is not defined and the tag is not "button"', () => {
    const wrapper = mount(<Button tag='a'>Home</Button>)

    expect(wrapper.find('a').hostNodes().prop('type')).toBe(undefined)
    expect(wrapper.text()).toBe('Home')
  })

  it('Should not render type by default when the type is not defined and the href is defined', () => {
    const wrapper = mount(<Button href='#'>Home</Button>)

    expect(wrapper.find('a').hostNodes().prop('type')).toBe(undefined)
    expect(wrapper.text()).toBe('Home')
  })

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn()
      const wrapper = mount(<Button onClick={onClick}>Testing Click</Button>)

      wrapper.find('button').hostNodes().simulate('click')
      expect(onClick).toHaveBeenCalled()
    })

    it('is not called when disabled', () => {
      const onClick = jest.fn()
      const wrapper = shallow(<Button disabled onClick={onClick} />)

      wrapper.simulate('click')
      expect(onClick).toHaveBeenCalledTimes(0)
    })
  })

  describe('snapshots', () => {
    it('Should be a default Button', () => {
      const component = renderer.create(<Button />)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('Should be an anchor button', () => {
      const component = renderer.create(<Button el='a' href='https://github.com/couds/react-bulma-components' />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
