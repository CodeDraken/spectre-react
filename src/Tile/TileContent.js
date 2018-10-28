import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'div'
}

const TileContent = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('tile-content', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

TileContent.propTypes = propTypes
TileContent.defaultProps = defaultProps

export default TileContent
