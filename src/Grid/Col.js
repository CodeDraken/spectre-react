import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const sizes = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const media = [ 'xs', 'sm', 'md', 'lg', 'xl' ]
const offsets = [ 'mx', 'ml', 'mr' ]

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.oneOf(sizes),
  sm: PropTypes.oneOf(sizes),
  md: PropTypes.oneOf(sizes),
  lg: PropTypes.oneOf(sizes),
  xl: PropTypes.oneOf(sizes),
  all: PropTypes.oneOf(sizes),
  hide: PropTypes.arrayOf(PropTypes.oneOf(media)),
  show: PropTypes.arrayOf(PropTypes.oneOf(media)),
  offset: PropTypes.oneOf(offsets),
  renderAs: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
}

const defaultProps = {
  hide: [],
  show: [],
  renderAs: 'div'
}

const Col = ({ children, ...props }) => {
  const {
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    all,
    hide,
    show,
    offset,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'column',

    {
      [`col-${all}`]: all,
      [`col-xs-${xs}`]: xs,
      [`col-sm-${sm}`]: sm,
      [`col-md-${md}`]: md,
      [`col-lg-${lg}`]: lg,
      [`col-xl-${xl}`]: xl,

      [`col-${offset}-auto`]: offset
    },

    hide.map(media => `hide-${media}`),

    show.map(media => `show-${media}`),

    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Col.propTypes = propTypes
Col.defaultProps = defaultProps

export default Col
