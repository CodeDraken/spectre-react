import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  responsive: PropTypes.bool,
  contain: PropTypes.bool,
  cover: PropTypes.bool
}

const defaultProps = {
  renderAs: 'img'
}

export const Image = ({ children, ...props }) => {
  const {
    className,
    responsive,
    contain,
    cover,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    {
      'img-responsive': responsive,
      'img-fit-contain': contain,
      'img-fit-cover': cover
    },
    className
  )

  return (
    <Element {...attributes} className={classNames} />
  )
}

Image.propTypes = propTypes
Image.defaultProps = defaultProps

export default Image
