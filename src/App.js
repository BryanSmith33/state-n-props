import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Count from './Components/Count'
import Btn from './Components/Btn'

class App extends Component {
  // constructor with some intial state
  constructor() {
    super()
    this.state = {
      name: 'Bryan',
      numberOfClicks: 0
    }
    // binding our handleIncreaseCount method we created below
    // could also be bound via an arrow function
    this.handleIncreaseCount = this.handleIncreaseCount.bind(this)
  }
  // method that will increase the number on state by one
  handleIncreaseCount() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    })
  }
  render() {
    return (
      <div className="App">
        {/* Header Component with name prop which value is the name on state */}
        <Header name={this.state.name} />
        {/* Count Component with two props, one coming from state and one being hard coded in */}
        <Count
          count={this.state.numberOfClicks}
          text={'The count is '} />
        {/* Btn Component with a method prop which value is the handleIncreaseCount method above. notice we bound this in constructor with .bind */}
        <Btn method={this.handleIncreaseCount} />
      </div>
    );
  }
}

export default App;
