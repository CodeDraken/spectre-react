import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import FigureCaption from './FigureCaption'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'figure'
}

export const Figure = ({ children, ...props }) => {
  const {
    className,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'figure',
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

Figure.propTypes = propTypes
Figure.defaultProps = defaultProps
Figure.Caption = FigureCaption

export default Figure
