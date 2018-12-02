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
  activeIndex: PropTypes.number,
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
    activeIndex: this.props.activeIndex || 0
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
      throw new Error('Please specify a panes prop or use the controlled Tab components')
      // return (
      //   <div>
      //     Please specify a panes prop or use the controlled Tab components
      //   </div>
      // )
    } else if (panes.length < 1) {
      return
    }

    const activeIndex = this.state.activeIndex
    const classNames = classnames(className) || null

    const menuItems = panes.map(({ menuEl, menuContent, key }, i) => {
      // default to tab i if no text or component supplied
      const content = menuContent || `Tab ${i + 1}`
      return (
        <TabMenuItem
          active={activeIndex === i}
          key={key || i}
          renderAs={menuEl}
          onClick={() => this.setActiveTab(i)}
        >
          {
            typeof content === 'string'
              ? <a className='btn btn-link'>{ content }</a>
              : content
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

        { Pane && <Pane /> }
      </Element>
    )
  }
}

Tab.propTypes = propTypes
Tab.defaultProps = defaultProps
Tab.Menu = TabMenu

export default Tab
