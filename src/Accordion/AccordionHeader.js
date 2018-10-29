import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const types = [ 'checkbox', 'radio' ]

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(types),
  inputProps: PropTypes.object
}

const defaultProps = {
  type: 'checkbox'
}

const AccordionHeader = ({ children, ...props }) => {
  const {
    className,
    id,
    type,
    inputProps,
    renderAs: Element,

    ...attributes
  } = props
  const classNames = classnames('accordion-header', 'c-hand', className)

  // has to use Fragment due to the way Spectre CSS works
  return (
    <React.Fragment>
      <input
        type={type}
        id={id}
        hidden
        {...inputProps}
      />
      <label
        {...attributes}
        className={classNames}
        htmlFor={id}
      >
        { children }
      </label>
    </React.Fragment>
  )
}

AccordionHeader.propTypes = propTypes
AccordionHeader.defaultProps = defaultProps

export default AccordionHeader
