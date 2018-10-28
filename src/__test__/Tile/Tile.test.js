import React from 'react'
import { shallow, render } from 'enzyme'

import { Tile } from '../..'

describe('Tile', () => {
  it('Should render default .tile markup', () => {
    const wrapper = shallow(<Tile />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('tile')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Tile>
        <p>hello world</p>
      </Tile>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Tile className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('tile')).toBe(true)
  })

  it('Should have Tile.Icon component', () => {
    expect(Tile.Icon).toBeDefined()
    expect(typeof Tile.Icon).toBe('function')
  })

  it('Should have Tile.Content component', () => {
    expect(Tile.Content).toBeDefined()
    expect(typeof Tile.Content).toBe('function')
  })

  it('Should have Tile.Action component', () => {
    expect(Tile.Action).toBeDefined()
    expect(typeof Tile.Action).toBe('function')
  })

  it('Should have Tile.Title component', () => {
    expect(Tile.Title).toBeDefined()
    expect(typeof Tile.Title).toBe('function')
  })

  it('Should have Tile.Subtitle component', () => {
    expect(Tile.Subtitle).toBeDefined()
    expect(typeof Tile.Subtitle).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Tile renderAs='main'>custom</Tile>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('tile')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Tile />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match a full snapshot', () => {
    const wrapper = render(
      <Tile>
        <Tile.Icon>
          <div>
            <img src='#' />
          </div>
        </Tile.Icon>

        <Tile.Content>
          <Tile.Title>Default Tile</Tile.Title>
          <Tile.Subtitle className='text-gray'>
            a subtitle
          </Tile.Subtitle>
        </Tile.Content>

        <Tile.Action>
          <button>Click me</button>
        </Tile.Action>
      </Tile>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
