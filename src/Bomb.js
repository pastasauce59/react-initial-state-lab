// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    messageHandler = () => {
        return this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    }

    render() {

        return <h1>{this.messageHandler()}</h1>

    }




}

export default Bomb;