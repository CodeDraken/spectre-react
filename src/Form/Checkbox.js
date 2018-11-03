import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  indeterminate: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  type: 'checkbox',
  label: '',
  large: false,
  small: false,
  iconLeft: false,
  iconRight: false,
  renderAs: 'input',
  iconWrapper: 'div'
}

const Checkbox = ({ children, ...props }) => {
  const {
    className,
    name,
    label,
    type,
    small,
    large,
    iconRight,
    iconLeft,
    renderAs: Element,
    iconWrapper: Wrapper,

    ...attributes
  } = props

  const classNames = classnames(
    'form-checkbox',
    {
      'input-sm': small,
      'input-lg': large
    },
    className
  )

  const checkbox = (
    <label class='form-checkbox'>
      <Element {...attributes} name={name} type='checkbox' className={classNames} />
      <i class='form-icon' />{label}
    </label>
  )

  const iconPosition = iconLeft ? 'left' : 'right'

  return iconLeft || iconRight ? (
    <Wrapper className={`has-icon-${iconPosition}`}>
      {checkbox}
      {children}
    </Wrapper>
  ) : checkbox
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox
