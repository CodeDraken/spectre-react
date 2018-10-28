import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  online: PropTypes.bool,
  busy: PropTypes.bool,
  away: PropTypes.bool
}

const defaultProps = {
  renderAs: 'i'
}

const AvatarPresence = ({ children, ...props }) => {
  const { className, online, busy, away, renderAs: Element, ...attributes } = props
  const classNames = classnames(
    'avatar-presence',
    {
      online,
      busy,
      away
    },
    className
  )

  return (
    <Element {...attributes} className={classNames} />
  )
}

AvatarPresence.propTypes = propTypes
AvatarPresence.defaultProps = defaultProps

export default AvatarPresence
