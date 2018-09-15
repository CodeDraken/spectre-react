import React, { Component } from 'react'

class Example extends Component {
  render () {
    return (
      <div>
        <button className='btn'>Example component</button>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Example
