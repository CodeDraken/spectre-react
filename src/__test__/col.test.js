import React from 'react'
import { shallow } from 'enzyme'

import { Col } from '../'

describe('Col', () => {
  it('Should render default .container markup', () => {
    const wrapper = shallow(<Col />)

    expect(wrapper.html()).toBe('<div class="column"></div>')
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Col>
        <p>hello world</p>
      </Col>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.html()).toBe('<div class="column"><p>hello world</p></div>')
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Col className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
  })

  it('Should render with "all" width size', () => {
    const wrapper = shallow(<Col className='extra' all={5} />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-5')).toBe(true)
  })

  it('Should render with xs width size', () => {
    const wrapper = shallow(<Col className='extra' xs={5} />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-xs-5')).toBe(true)
  })

  it('Should render with sm width size', () => {
    const wrapper = shallow(<Col className='extra' sm={5} />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-sm-5')).toBe(true)
  })

  it('Should render with md width size', () => {
    const wrapper = shallow(<Col className='extra' md={5} />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-md-5')).toBe(true)
  })

  it('Should render with lg width size', () => {
    const wrapper = shallow(<Col className='extra' lg={5} />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-lg-5')).toBe(true)
  })

  it('Should render with xl width size', () => {
    const wrapper = shallow(<Col className='extra' xl={5} />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-xl-5')).toBe(true)
  })

  it('Should hide on sizes', () => {
    const wrapper = shallow(
      <Col className='extra' hide={['xs', 'sm', 'md', 'lg', 'xl']} />
    )

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('hide-xs')).toBe(true)
    expect(wrapper.hasClass('hide-sm')).toBe(true)
    expect(wrapper.hasClass('hide-md')).toBe(true)
    expect(wrapper.hasClass('hide-lg')).toBe(true)
    expect(wrapper.hasClass('hide-xl')).toBe(true)
  })

  it('Should show on sizes', () => {
    const wrapper = shallow(
      <Col className='extra' show={['xs', 'sm', 'md', 'lg', 'xl']} />
    )

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('show-xs')).toBe(true)
    expect(wrapper.hasClass('show-sm')).toBe(true)
    expect(wrapper.hasClass('show-md')).toBe(true)
    expect(wrapper.hasClass('show-lg')).toBe(true)
    expect(wrapper.hasClass('show-xl')).toBe(true)
  })

  it('Should pass mx offset', () => {
    const wrapper = shallow(<Col className='extra' offset='mx' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-mx-auto')).toBe(true)
  })

  it('Should pass ml offset', () => {
    const wrapper = shallow(<Col className='extra' offset='ml' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-ml-auto')).toBe(true)
  })

  it('Should pass mr offset', () => {
    const wrapper = shallow(<Col className='extra' offset='mr' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.hasClass('col-mr-auto')).toBe(true)
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Col renderAs='main'>custom</Col>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('column')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Col />)

    expect(wrapper).toMatchSnapshot()
  })
})
