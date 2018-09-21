import React from 'react'
import PropTypes from 'prop-types'

import { Label } from '.'

const propTypes = {
  renderAs: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  children: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'h1',
  className: '',
  label: '',
  children: null
}

export const Heading = ({ children, ...props }) => {
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

// export const Label = ({ children, ...props }) => {
//   const { className, ...attributes } = props
//   const classNames = classnames('label', className)

//   return (
//     <small {...attributes} className={classNames}>
//       { children }
//     </small>
//   )
// }

// Label.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string
// }

Heading.propTypes = propTypes

Heading.defaultProps = defaultProps

export default Heading
