import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'span'
}

const Chip = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('chip', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Chip.propTypes = propTypes
Chip.defaultProps = defaultProps

export default Chip
