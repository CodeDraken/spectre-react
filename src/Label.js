import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const colors = [ 'primary', 'secondary', 'success', 'warning', 'error' ]

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  rounded: PropTypes.bool,
  form: PropTypes.bool,
  for: PropTypes.string,
  renderAs: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
}

const defaultProps = {
  children: null,
  className: '',
  renderAs: 'span',
  color: null,
  rounded: false,
  form: false,
  for: null
}

export const Label = ({ children, ...props }) => {
  const {
    color,
    rounded,
    small,
    className,
    renderAs,
    for: htmlFor,
    form,

    ...attributes
  } = props

  const classNames = classnames(
    {
      [`label-${color}`]: color,
      'label-rounded': rounded,
      'form-label': form,
      'label': !form
    },

    className
  )

  let Element = renderAs

  if (htmlFor && Element === 'span') {
    Element = 'label'
  }

  return (
    <Element
      {...attributes}
      className={classNames}
      htmlFor={htmlFor}
    >
      { children }
    </Element>
  )
}

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label
