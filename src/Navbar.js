import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  centered: PropTypes.bool
}

const defaultProps = {
  renderAs: 'nav'
}

export const Navbar = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('navbar', className)

  return (
    <Element {...attributes} className={classNames}>
      Navbar
    </Element>
  )
}

Navbar.propTypes = propTypes
Navbar.defaultProps = defaultProps

export default Navbar
