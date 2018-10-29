import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import PopoverContainer from './PopoverContainer'

const positions = [ 'right', 'bottom', 'left' ]

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  position: PropTypes.oneOf(positions)
}

const defaultProps = {
  renderAs: 'div'
}

const Popover = ({ children, ...props }) => {
  const { className, position, renderAs: Element, ...attributes } = props
  const classNames = classnames(
    'popover',
    {
      [`popover-${position}`]: position
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Popover.propTypes = propTypes
Popover.defaultProps = defaultProps

Popover.Container = PopoverContainer

export default Popover
