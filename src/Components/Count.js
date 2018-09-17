import React, { Component } from 'react'

// class based component because we want to use two component life cycle methods provided by React
class Count extends Component {
  //component... named method is a good indication that it is a life cycle method
  // This method fires only once when a component is mounted to the DOM
  componentDidMount() {
    console.log('MOUNTED')
  }
  // This method fires anytime the Count component receives a new prop which it does whenever the Btn is clicked and the count is increased by one
  componentWillReceiveProps(){
    console.log('NEW PROPS YO ', this.props);
  }
  render() {
    return (
      <div>
        {/* access props via this.props because it is a class based component */}
        <h3>{this.props.text}{this.props.count}</h3>
      </div>
    )
  }
}

export default Count