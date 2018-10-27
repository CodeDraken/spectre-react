import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'div'
}

const CardTitle = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('card-title', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

CardTitle.propTypes = propTypes
CardTitle.defaultProps = defaultProps

export default CardTitle
