import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TabMenu from './TabMenu'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      menuItem: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      render: PropTypes.func,
      key: PropTypes.string
    })
  )
}

const defaultProps = {
  renderAs: 'div'
}

class Tab extends Component {
  state = {
    activeTab: 0
  }

  render () {
    const { children, className, renderAs: Element, ...attributes } = this.props
    const classNames = classnames('my-class', className)

    return (
      <Element {...attributes} className={classNames}>
        { children }
      </Element>
    )
  }
}

Tab.propTypes = propTypes
Tab.defaultProps = defaultProps
Tab.Menu = TabMenu

export default Tab
