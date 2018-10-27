import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardImage from './CardImage'
import CardHeader from './CardHeader'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'div'
}

const Card = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('card', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage
Card.Header = CardHeader

export default Card
