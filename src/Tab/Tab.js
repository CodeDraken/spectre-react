import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TabMenu from './TabMenu'
import TabMenuItem from './TabMenuItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  block: PropTypes.bool,
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      menuEl: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      menuContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
      render: PropTypes.func,
      key: PropTypes.string,
      active: PropTypes.bool
    })
  ).isRequired
}

const defaultProps = {
  renderAs: 'div',
  block: false
}

class Tab extends Component {
  state = {
    activeTab: 0
  }

  render () {
    const {
      children,
      className,
      panes,
      block,
      renderAs: Element,

      ...attributes
    } = this.props

    const classNames = classnames('my-class', className)

    const menuItems = panes.map(({ menuEl, menuContent, key }, i) =>
      <TabMenuItem
        active={this.state.activeIndex === i}
        key={key || i}
        renderAs={menuEl}>
        { menuContent }
      </TabMenuItem>
    )

    return (
      <Element {...attributes} className={classNames}>
        <TabMenu block={block}>
          { menuItems }
        </TabMenu>

        { children }
      </Element>
    )
  }
}

Tab.propTypes = propTypes
Tab.defaultProps = defaultProps
Tab.Menu = TabMenu

export default Tab
