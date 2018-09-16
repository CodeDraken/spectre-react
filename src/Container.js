import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

const defaultProps = {
  children: null,
  className: '',
  size: null
}

export const Container = ({ children, ...props }) => {
  const {
    className,
    size,

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
    <div {...attributes} className={classNames}>
      { children }
    </div>
  )
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container
