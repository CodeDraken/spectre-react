import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ModalContainer from './ModalContainer'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  withOverlay: PropTypes.bool
}

const defaultProps = {
  renderAs: 'div',
  active: false,
  withOverlay: false
}

const Modal = ({ children, ...props }) => {
  const {
    className,
    active,
    withOverlay,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'modal',
    { active },
    className
  )

  const overlay = <a className='modal-overlay' href='#!' aria-label='Close' />

  return (
    <Element {...attributes} className={classNames}>
      { withOverlay && overlay }
      { children }
    </Element>
  )
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

Modal.Container = ModalContainer
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
