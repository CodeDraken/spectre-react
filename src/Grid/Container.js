import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  renderAs: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
}

const defaultProps = {
  children: null,
  className: null,
  size: null,
  renderAs: 'div'
}

const Container = ({ children, ...props }) => {
  const {
    className,
    size,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'container',
    className,
    {
      [`grid-${size}`]: size
    }
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container
