import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  scroll: PropTypes.bool,
  renderAs: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
}

const defaultProps = {
  striped: false,
  hover: false,
  scroll: false,
  renderAs: 'table'
}

const Table = ({ children, ...props }) => {
  const {
    className,
    striped,
    hover,
    scroll,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'table',
    className,
    {
      'table-striped': striped,
      'table-hover': hover,
      'table-scroll': scroll
    }
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Table.propTypes = propTypes
Table.defaultProps = defaultProps

export default Table
