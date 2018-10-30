import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ModalContainer from './ModalContainer'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalOverlay from './ModalOverlay'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool
}

const defaultProps = {
  renderAs: 'div',
  active: false
}

const Modal = ({ children, ...props }) => {
  const {
    className,
    active,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'modal',
    { active },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
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
Modal.Overlay = ModalOverlay

export default Modal
