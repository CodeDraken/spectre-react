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

const PopoverContainer = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('popover-container', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

PopoverContainer.propTypes = propTypes
PopoverContainer.defaultProps = defaultProps

export default PopoverContainer
