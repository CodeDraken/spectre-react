import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  center: PropTypes.bool
}

const defaultProps = {
  renderAs: 'div'
}

export const NavbarSection = ({ children, ...props }) => {
  const { className, center, renderAs: Element, ...attributes } = props
  const classNames = classnames(
    {
      'navbar-section': !center,
      'navbar-center': center
    },

    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

NavbarSection.propTypes = propTypes
NavbarSection.defaultProps = defaultProps

export default NavbarSection
