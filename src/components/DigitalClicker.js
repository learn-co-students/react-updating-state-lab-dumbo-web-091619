import React, { Component } from 'react';

export class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        const newTime = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTime
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;
