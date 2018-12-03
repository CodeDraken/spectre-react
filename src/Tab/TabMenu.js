import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TabMenuItem from './TabMenuItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  block: PropTypes.bool
}

const defaultProps = {
  renderAs: 'ul',
  block: false
}

const TabMenu = ({ children, ...props }) => {
  const { className, block, renderAs: Element, ...attributes } = props
  const classNames = classnames(
    'tab',
    {
      'tab-block': block
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      { children }
    </Element>
  )
}

TabMenu.propTypes = propTypes
TabMenu.defaultProps = defaultProps
TabMenu.Item = TabMenuItem

export default TabMenu
