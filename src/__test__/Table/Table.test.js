import React from 'react'
import { shallow } from 'enzyme'

import { Table } from '../..'

describe('Table', () => {
  it('Should render default .table markup', () => {
    const wrapper = shallow(<Table />)

    expect(wrapper.html()).toBe('<table class="table"></table>')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Table>
        <tbody>
          <td>hello world</td>
        </tbody>
      </Table>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<table class="table"><tbody><td>hello world</td></tbody></table>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Table className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('table')).toBe(true)
  })

  it('Should render with stripes', () => {
    const wrapper = shallow(<Table className='extra' striped />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('table')).toBe(true)
    expect(wrapper.hasClass('table-striped')).toBe(true)
  })

  it('Should render with hover', () => {
    const wrapper = shallow(<Table className='extra' hover />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('table')).toBe(true)
    expect(wrapper.hasClass('table-hover')).toBe(true)
  })

  it('Should render with scroll', () => {
    const wrapper = shallow(<Table className='extra' scroll />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('table')).toBe(true)
    expect(wrapper.hasClass('table-scroll')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Table renderAs='main'>custom</Table>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('table')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Table />)

    expect(wrapper).toMatchSnapshot()
  })
})
