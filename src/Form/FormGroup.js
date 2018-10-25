import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
}

const defaultProps = {
  renderAs: 'div'
}

const FormGroup = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('form-group', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

FormGroup.propTypes = propTypes
FormGroup.defaultProps = defaultProps

export default FormGroup
