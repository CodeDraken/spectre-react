import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'text', 'email', 'tel', 'password', 'number', 'search',
    'color', 'file', 'date'
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool
}

const defaultProps = {
  className: '',
  type: 'text',
  value: '',
  name: null,
  placeholder: '',
  large: false,
  small: false,
  iconLeft: false,
  iconRight: false
}

export const Input = ({ children, ...props }) => {
  const {
    className,
    name,
    type,
    placeholder,
    value,
    small,
    large,
    iconRight,
    iconLeft,

    ...attributes
  } = props

  const classNames = classnames(
    'form-input',

    {
      'input-sm': small,
      'input-lg': large
    },

    className
  )

  const input = (
    <input
      {...attributes}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={classNames}
    />
  )

  return (
    iconLeft || iconRight
      ? (
        <div class={`has-icon-${iconLeft || iconRight}`}>
          { input }
          { children }
        </div>
      )
      : input
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
