import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  action: PropTypes.bool
}

const defaultProps = {
  renderAs: 'li',
  active: false,
  action: false
}

const TabMenuItem = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('tab-item', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

TabMenuItem.propTypes = propTypes
TabMenuItem.defaultProps = defaultProps

export default TabMenuItem
