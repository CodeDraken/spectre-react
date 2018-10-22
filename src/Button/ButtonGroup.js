import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  block: PropTypes.bool
}

const defaultProps = {
  renderAs: 'div'
}

const ButtonGroup = ({ children, ...props }) => {
  const { block, renderAs: Element, ...attributes } = props
  const classNames = classnames('btn-group', { 'btn-group-block': block })

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

ButtonGroup.propTypes = propTypes
ButtonGroup.defaultProps = defaultProps

export default ButtonGroup
