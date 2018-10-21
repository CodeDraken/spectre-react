import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  align: PropTypes.oneOf(['right', 'left', 'center'])
}

const defaultProps = {
  renderAs: 'figcaption'
}

export const FigureCaption = ({ children, ...props }) => {
  const { className, align, renderAs: Element, ...attributes } = props
  const classNames = classnames(
    'figure-caption',
    {
      [`text-align-${align}`]: align
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

FigureCaption.propTypes = propTypes
FigureCaption.defaultProps = defaultProps

export default FigureCaption
