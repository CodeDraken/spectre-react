import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['2x', '3x', '4x']),
  formIcon: PropTypes.bool
}

const defaultProps = {
  className: '',
  icon: null,
  size: null,
  formIcon: false
}

export const Icon = ({ children, ...props }) => {
  const { className, formIcon, icon, size, ...attributes } = props

  const classNames = classnames(
    'icon',
    `icon-${icon}`,
    {
      [`icon-${size}`]: size,
      'form-icon': formIcon
    }
  )

  return (
    <i {...attributes} className={classNames} />
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
