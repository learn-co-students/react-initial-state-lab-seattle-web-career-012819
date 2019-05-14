import React, { Component } from 'react';


class Bomb extends Component {
    constructor(props){
        super(props)

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    doIGoBoom(){
        if (this.state.secondsLeft > 0) {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        } else {
            return <p>Boom!</p>
        }
    }

    render() {
        return (
            this.doIGoBoom()
        )
    }
}

export default Bomb
