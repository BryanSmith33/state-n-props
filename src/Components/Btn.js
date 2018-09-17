import React, { Component } from 'react'

class Btn extends Component {
  render(){
    return (
      <button onClick={this.props.method}>+1</button>
    )
  }
}

export default Btn