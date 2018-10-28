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

const TileAction = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('tile-action', className)

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

TileAction.propTypes = propTypes
TileAction.defaultProps = defaultProps

export default TileAction
