import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const colors = ['primary', 'secondary', 'success', 'warning', 'error']

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  renderAs: 'div'
}

const Toast = ({ children, ...props }) => {
  const { color, className, renderAs: Element, ...attributes } = props

  const classNames = classnames(
    {
      [`toast-${color}`]: color,
      toast: 'toast'
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Toast.propTypes = propTypes
Toast.defaultProps = defaultProps

export default Toast
