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

const CardFooter = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('card-footer', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

CardFooter.propTypes = propTypes
CardFooter.defaultProps = defaultProps

export default CardFooter
