import React from 'react'
import { shallow, render } from 'enzyme'

import { Modal } from '../..'

describe('Modal', () => {
  it('Should render default .modal markup', () => {
    const wrapper = shallow(<Modal />)

    expect(wrapper.type()).toBe('div')
    expect(wrapper.hasClass('modal')).toBe(true)
  })

  it('Should render children', () => {
    const wrapper = shallow(
      <Modal>
        <p>hello world</p>
      </Modal>
    )

    expect(wrapper.children().length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  it('Should pass classnames', () => {
    const wrapper = shallow(<Modal className='extra' />)

    expect(wrapper.hasClass('extra')).toBe(true)
    expect(wrapper.hasClass('modal')).toBe(true)
  })

  it('Should use active class', () => {
    const wrapper = shallow(<Modal active />)

    expect(wrapper.hasClass('active')).toBe(true)
  })

  it('Should have Modal.Body component', () => {
    expect(Modal.Body).toBeDefined()
    expect(typeof Modal.Body).toBe('function')
  })

  it('Should have Modal.Footer component', () => {
    expect(Modal.Footer).toBeDefined()
    expect(typeof Modal.Footer).toBe('function')
  })

  it('Should have Modal.Overlay component', () => {
    expect(Modal.Overlay).toBeDefined()
    expect(typeof Modal.Overlay).toBe('function')
  })

  it('Should have Modal.Header component', () => {
    expect(Modal.Header).toBeDefined()
    expect(typeof Modal.Header).toBe('function')
  })

  it('Should render as a custom element', () => {
    const wrapper = shallow(<Modal renderAs='main'>custom</Modal>)

    expect(wrapper.text()).toBe('custom')
    expect(wrapper.hasClass('modal')).toBe(true)
    expect(wrapper.type()).toBe('main')
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Modal />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the use case snapshot', () => {
    const wrapper = render(
      <Modal>
        <Modal.Overlay />
        <Modal.Container>

          <Modal.Header>
            <Modal.Header.Title className='h5'>
              Modal Title
            </Modal.Header.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi incidunt odit non ea. Porro, ut inventore autem sint, vero omnis id ab neque voluptate unde distinctio quasi corrupti possimus.</p>
          </Modal.Body>

          <Modal.Footer>
            <button>Share</button>
            <button>Close</button>
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
