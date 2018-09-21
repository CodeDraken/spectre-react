import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const defaultProps = {
  children: null,
  className: null
}

export const FormGroup = ({ children, ...props }) => {
  const { className, ...attributes } = props
  const classNames = classnames('form-group', className)

  return (
    <div {...attributes} className={classNames}>
      { children }
    </div>
  )
}

FormGroup.propTypes = propTypes
FormGroup.defaultProps = defaultProps

export default FormGroup
