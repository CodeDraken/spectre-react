import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['2x', '3x', '4x']),
  formIcon: PropTypes.bool,
  renderAs: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
}

const defaultProps = {
  className: null,
  icon: null,
  size: null,
  formIcon: false,
  renderAs: 'i'
}

export const Icon = ({ children, ...props }) => {
  const { className, formIcon, icon, size, renderAs: Element, ...attributes } = props

  const classNames = classnames(
    'icon',
    `icon-${icon}`,
    className,
    {
      [`icon-${size}`]: size,
      'form-icon': formIcon
    }
  )

  return (
    <Element {...attributes} className={classNames} />
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
