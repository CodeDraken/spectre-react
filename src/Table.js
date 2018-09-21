import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  scroll: PropTypes.bool
}

const defaultProps = {
  className: null,
  children: null,
  striped: false,
  hover: false,
  scroll: false
}

export const Table = ({ children, ...props }) => {
  const {
    className,
    striped,
    hover,
    scroll,

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
    <table {...attributes} className={classNames}>
      { children }
    </table>
  )
}

Table.propTypes = propTypes
Table.defaultProps = defaultProps

export default Table
