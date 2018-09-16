import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  cite: PropTypes.string
}

const defaultProps = {
  children: null,
  text: '',
  cite: ''
}

export const Blockquote = ({ children, ...props }) => {
  const { text, cite, ...attributes } = props

  return (
    <blockquote {...attributes}>
      <p>{ text }</p>
      <cite>{ cite }</cite>
    </blockquote>
  )
}

Blockquote.propTypes = propTypes
Blockquote.defaultProps = defaultProps

export default Blockquote
