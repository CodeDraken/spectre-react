import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NavItem from './NavItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'ul'
}

const Nav = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('nav', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Nav.propTypes = propTypes
Nav.defaultProps = defaultProps
Nav.Item = NavItem

export default Nav
