import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

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
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
}

const defaultProps = {
  tag: 'button'
  // onClick: () => null
}

export const Button = ({ children, ...props }) => {
  const {
    className,
    onClick,
    tag,

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

  let Tag = tag

  if (attributes.href && Tag === 'button') {
    Tag = 'a'
  }

  return (
    <Tag
      type={(Tag === 'button' && onClick) ? 'button' : undefined}
      {...attributes}
      onClick={disabled ? undefined : onClick}
      className={classNames}
    >
      { children }
    </Tag>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export const ButtonGroup = ({ children, ...props }) => {
  const { block, ...attributes } = props
  const classNames = classnames('btn-group', { 'btn-group-block': block })

  return (
    <div {...attributes} className={classNames}>
      { children }
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool
}

export default Button
