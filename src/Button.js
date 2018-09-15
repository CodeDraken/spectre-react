import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.any,
  circle: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.bool,
  large: PropTypes.bool,
  link: PropTypes.bool,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
}

const defaultProps = {
  tag: 'button'
}

export const Button = ({ children, ...props }) => {
  const {
    className,

    // styles
    primary,
    link,

    // colors
    success,
    error,

    // sizes
    block,
    small,
    large,
    action,
    circle,

    // states
    active,
    loading,

    tag,
    ...attributes
  } = props

  const classNames = classnames(
    'btn',

    {
      'btn-primary': primary,
      'btn-link': link,
      'btn-success': success,
      'btn-error': error,
      'btn-block': block,
      'btn-sm': small,
      'btn-lg': large,
      'btn-action': action || circle,
      circle: circle,
      active: active,
      loading: loading
    },

    className
  )

  let Tag = tag

  if (attributes.href && Tag === 'button') {
    Tag = 'a'
  }

  return (
    <Tag {...attributes} className={classNames}>
      { children }
    </Tag>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
