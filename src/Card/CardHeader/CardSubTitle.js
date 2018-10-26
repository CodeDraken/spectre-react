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

const CardSubTitle = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('card-subtitle', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

CardSubTitle.propTypes = propTypes
CardSubTitle.defaultProps = defaultProps

export default CardSubTitle
