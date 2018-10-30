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

const ModalContainer = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('modal-container', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

ModalContainer.propTypes = propTypes
ModalContainer.defaultProps = defaultProps

export default ModalContainer
