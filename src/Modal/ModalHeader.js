import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ModalTitle from './ModalTitle'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'div'
}

const ModalHeader = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('modal-header', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

ModalHeader.propTypes = propTypes
ModalHeader.defaultProps = defaultProps

ModalHeader.Title = ModalTitle

export default ModalHeader
