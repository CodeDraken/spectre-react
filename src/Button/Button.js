import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ButtonGroup from './ButtonGroup'

const propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  large: PropTypes.bool,
  link: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  renderAs: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
}

const defaultProps = {
  renderAs: 'button'
  // onClick: () => null
}

const Button = ({ children, ...props }) => {
  const {
    className,
    onClick,
    renderAs,

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
    disabled,

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
      loading: loading,
      disabled: disabled
    },

    className
  )

  let Element = renderAs

  if (attributes.href && Element === 'button') {
    Element = 'a'
  }

  return (
    <Element
      type={(Element === 'button' && onClick) ? 'button' : undefined}
      {...attributes}
      onClick={disabled ? undefined : onClick}
      className={classNames}
    >
      { children }
    </Element>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
Button.Group = ButtonGroup

export default Button
