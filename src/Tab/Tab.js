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
    activeIndex: 0
  }

  setActiveTab (i) {
    if (i !== this.state.activeIndex) {
      this.setState({
        activeIndex: i
      })
    }
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

    if (!panes) {
      return (
        <div>
          Please specify a panes prop or use the controlled Tab component
        </div>
      )
    }

    const activeIndex = this.state.activeIndex

    const classNames = classnames('my-class', className)

    const menuItems = panes.map(({ menuEl, menuContent, key }, i) => {
      return (
        <TabMenuItem
          active={activeIndex === i}
          key={key || i}
          renderAs={menuEl}
          onClick={() => this.setActiveTab(i)}
        >
          {
            typeof menuContent === 'string'
              ? <a className='btn btn-link'>{ menuContent }</a>
              : menuContent
          }
        </TabMenuItem>
      )
    })

    const Pane = panes[activeIndex].render

    return (
      <Element {...attributes} className={classNames}>
        <TabMenu block={block}>
          { menuItems }
        </TabMenu>

        <Pane />
      </Element>
    )
  }
}

Tab.propTypes = propTypes
Tab.defaultProps = defaultProps
Tab.Menu = TabMenu

export default Tab
