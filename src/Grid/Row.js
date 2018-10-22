import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool,
  renderAs: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
}

const defaultProps = {
  children: null,
  className: null,
  gapless: false,
  oneline: false,
  renderAs: 'div'
}

const Row = ({ children, ...props }) => {
  const {
    className,
    gapless,
    oneline,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'columns',
    {
      'col-gapless': gapless,
      'col-oneline': oneline
    },

    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row
