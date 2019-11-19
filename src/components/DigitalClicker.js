// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor () {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementTimesClicked = (event) => {
    this.setState((previousState) => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render () {
    return (
      <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
