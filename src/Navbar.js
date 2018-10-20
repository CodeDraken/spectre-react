import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NavbarSection from './NavbarSection'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'nav'
}

export const Navbar = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('navbar', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Navbar.propTypes = propTypes
Navbar.defaultProps = defaultProps
Navbar.section = NavbarSection

export default Navbar
