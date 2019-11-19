import React from 'react';


export default class DigitalClicker extends React.Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  click_counter = () => {
    this.setState(previousState => {
      return {
        timesClicked: this.state.timesClicked + 1
      }
    })
  }

  render(){
    return(
      <button onClick={this.click_counter}>
        {this.state.timesClicked}
      </button>
    )
  }
}
