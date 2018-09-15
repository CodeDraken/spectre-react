import React, { Component } from 'react'

class Example extends Component {
  render () {
    return (
      <div>
        <p>Example component</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Example
