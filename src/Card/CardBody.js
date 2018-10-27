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

const CardBody = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('card-body', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

CardBody.propTypes = propTypes
CardBody.defaultProps = defaultProps

export default CardBody
