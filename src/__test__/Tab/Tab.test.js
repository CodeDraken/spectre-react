import React from 'react'
import { shallow, render, mount } from 'enzyme'

import { Tab } from '../..'

describe('Tab', () => {
  const MyComponent = () => <div>Custom Content</div>
  const panes = [
    { menuContent: 'Tab 1', render: () => <div>Basic Tab Item</div> },
    {
      menuContent: <a className='btn btn-link text-error'>Custom menu item</a>,
      render: MyComponent
    },
    { render: () => <div>Defaults to Tab i+1 if no label supplied</div> }
  ]

  it('Should render default tab markup', () => {
    const wrapper = shallow(<Tab panes={panes} />)

    expect(wrapper.type()).toBe('div')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Tab panes={panes} className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
  })

  it('Should have Tab.Menu component', () => {
    expect(Tab.Menu).toBeDefined()
    expect(typeof Tab.Menu).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Tab panes={panes} renderAs='main' />)

    expect(wrapper.type()).toBe('main')
  })

  it('Should render an item for every MenuItem in panes', () => {
    const wrapper = shallow(<Tab panes={panes} />)
    const items = wrapper
      .find('TabMenu')
      .shallow()
      .find('TabMenuItem')

    expect(items.length).toBe(3)
    expect(items.at(0).shallow().text()).toBe('Tab 1')
    expect(items.at(1).shallow().text()).toBe('Custom menu item')
    expect(items.at(2).shallow().text()).toBe('Tab 3')
  })

  // it('Should pass props to MenuItems', () => {
  //   const wrapper = shallow(<Tab panes={panes} />)
  //   const item = wrapper
  //     .find('TabMenu')
  //     .shallow()
  //     .childAt(0)

  //   expect(item.props()).toBe({})
  // })

  it('Should pass the "block" prop to the TabMenu', () => {
    const wrapper = shallow(<Tab block panes={panes} />)

    expect(wrapper.find('TabMenu').props().block).toBe(true)
  })

  it('Should render the menu above the pane', () => {
    const wrapper = shallow(<Tab panes={panes} />)

    expect(wrapper.childAt(0).type()).toBe(Tab.Menu)
  })

  it('Should render default tab markup', () => {
    const wrapper = shallow(<Tab panes={panes} />)

    expect(wrapper.type()).toBe('div')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Tab panes={panes} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the use case snapshot', () => {
    const wrapper = render(<Tab block panes={panes} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('Controls', () => {

  })
})
