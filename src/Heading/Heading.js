import React from 'react'
import PropTypes from 'prop-types'

import Label from '../Label'

const propTypes = {
  renderAs: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  children: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'h1',
  className: null,
  label: null,
  children: null
}

const Heading = ({ children, ...props }) => {
  const {
    renderAs: Element,
    label,

    ...attributes
  } = props

  return (
    <Element {...attributes}>
      { children }{ label && <Label renderAs='small'> { label }</Label> }
    </Element>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
