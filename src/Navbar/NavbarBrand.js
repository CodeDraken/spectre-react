import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.string
}

const defaultProps = {
  renderAs: 'a',
  href: '#'
}

export const NavbarBrand = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('navbar-brand', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

NavbarBrand.propTypes = propTypes
NavbarBrand.defaultProps = defaultProps

export default NavbarBrand
