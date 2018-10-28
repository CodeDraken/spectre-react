import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool
}

const defaultProps = {
  renderAs: 'li',
  active: false
}

const NavItem = ({ children, ...props }) => {
  const { className, active, renderAs: Element, ...attributes } = props
  const classNames = classnames(
    'nav-item',
    {
      active
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps

export default NavItem
