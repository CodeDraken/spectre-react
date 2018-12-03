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
    it('Should pass activeIndex prop to the Tab state', () => {
      const wrapper = mount(<Tab panes={panes} activeIndex={1} />)

      expect(wrapper.state('activeIndex')).toBe(1)
    })

    it('Should set activeIndex on the Tab state when an item is clicked', () => {
      const wrapper = mount(<Tab panes={panes} />)

      expect(wrapper.find('TabMenuItem[active=true]').text()).toBe('Tab 1')
      expect(wrapper.state('activeIndex')).toBe(0)

      wrapper
        .find('TabMenuItem')
        .at(1)
        .simulate('click')

      expect(wrapper.state('activeIndex')).toBe(1)
      expect(wrapper.find('TabMenuItem[active=true]').text()).toBe('Custom menu item')
    })

    it('Should only render the active pane', () => {
      const renderSpy = jest.fn(() => <div>Spy Pane</div>)
      const panesCustom = [
        { menuContent: 'Tab 1', render: () => <div>Tab 1 Pane</div> },
        { menuContent: 'Tab 2', render: () => <div>Tab 2 Pane</div> },
        { menuContent: 'Tab 3', render: renderSpy }
      ]

      const wrapper = mount(<Tab activeIndex={0} panes={panesCustom} />)

      wrapper
        .setState({ activeIndex: 1 })
        .setState({ activeIndex: 2 })

      expect(wrapper.find('TabMenuItem[active=true]').text()).toBe('Tab 3')
      expect(renderSpy.mock.calls.length).toBe(1)
    })

    it('Should call onTabChange if provided, and pass the new and old active indexes', () => {
      const changeSpy = jest.fn()
      const panesCustom = [
        { menuContent: 'Tab 1', render: () => <div>Tab 1 Pane</div> },
        { menuContent: 'Tab 2', render: () => <div>Tab 2 Pane</div> },
        { menuContent: 'Tab 3', render: () => <div>Tab 3 Pane</div> }
      ]

      const wrapper = mount(<Tab onTabChange={changeSpy} activeIndex={0} panes={panesCustom} />)

      wrapper
        .find('TabMenuItem')
        .at(1)
        .simulate('click')

      expect(changeSpy.mock.calls.length).toBe(1)
      expect(changeSpy.mock.calls[0][0]).toEqual({
        next: 1, previous: 0
      })
    })
  })
})
