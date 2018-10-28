import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'p'
}

const TileSubtitle = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('tile-subtitle', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

TileSubtitle.propTypes = propTypes
TileSubtitle.defaultProps = defaultProps

export default TileSubtitle
