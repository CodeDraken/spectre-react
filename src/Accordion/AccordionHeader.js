import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'label'
}

const AccordionHeader = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('accordion-header', className)

  return (
    <Element {...attributes} className={classNames}>
      { Element === 'label' && <input type='checkbox' hidden /> }
      { children }
    </Element>
  )
}

AccordionHeader.propTypes = propTypes
AccordionHeader.defaultProps = defaultProps

export default AccordionHeader
