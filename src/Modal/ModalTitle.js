import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'div'
}

const ModalTitle = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('modal-title', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

ModalTitle.propTypes = propTypes
ModalTitle.defaultProps = defaultProps

export default ModalTitle
