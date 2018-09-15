import React from 'react'
import { shallow, mount } from 'enzyme'
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
})
