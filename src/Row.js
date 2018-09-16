import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool
}

const defaultProps = {
  children: null,
  className: '',
  gapless: false,
  oneline: false
}

export const Row = ({ children, ...props }) => {
  const { className, gapless, oneline, ...attributes } = props

  const classNames = classnames(
    'columns',
    {
      'col-gapless': gapless,
      'col-oneline': oneline
    },

    className
  )

  return (
    <div {...attributes} className={classNames}>
      { children }
    </div>
  )
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row
