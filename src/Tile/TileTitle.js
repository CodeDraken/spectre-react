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

const TileTitle = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('tile-title', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

TileTitle.propTypes = propTypes
TileTitle.defaultProps = defaultProps

export default TileTitle
